import { ValidationPipe } from '@nestjs/common';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { useContainer, ValidationError } from 'class-validator';
import { EnvironmentVariables } from 'env/env.configuration';
import { json, urlencoded } from 'express';
import mongoose from 'mongoose';
import { AppModule } from './app.module';
import { ErrorCodes } from './utils/constants/error-codes';
import { ValidationErrorCodes } from './utils/constants/validation-error-codes';
import { AllExceptionsFilter } from './utils/exception-filter/all-exceptions-filter';
import { InvalidParamsException } from './utils/exception/invalid-params-exception';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  // app.useGlobalInterceptors(new ResponseTransformInterceptor());
  app.useGlobalFilters(new AllExceptionsFilter(app.get(HttpAdapterHost)));
  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (errors: ValidationError[]) => {
        return ValidationErrorsFormat(errors);
      },
    }),
  );

  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true, limit: '50mb' }));

  /**
   * Cors
   */
  app.enableCors();

  await app.listen(EnvironmentVariables().port);
  mongoose.set('debug', EnvironmentVariables().mongodb.mongooseDebug);
}
bootstrap();

/**
 * Parse the validation error to our format
 * @param errors
 * @constructor
 */
function ValidationErrorsFormat(
  validationErrors: ValidationError[],
): InvalidParamsException {
  console.log('ValidationErrors', JSON.stringify(validationErrors));
  console.log('ValidationErrors', validationErrors);

  const myValidationErrors: { [key: string]: any } = {};

  // Recursion using inner function to handle nested objects
  function _ValidationErrorsFormat(validationErrors, property?: string) {
    for (const validationError of validationErrors) {
      if (
        validationError.children != undefined &&
        validationError.children.length > 0
      ) {
        _ValidationErrorsFormat(
          validationError.children,
          validationError.property,
        );
      } else {
        const key =
          property != undefined && property.length > 0
            ? property + '.' + validationError.property
            : validationError.property;
        myValidationErrors[key] = [];
        const constraints = Object.keys(validationError.constraints);
        for (const constraint of constraints) {
          myValidationErrors[key].push(ValidationErrorCodes[constraint]);
        }
      }
    }
  }

  _ValidationErrorsFormat(validationErrors);

  // return exception
  const invalidParams = ErrorCodes.INVALID_PARAMS;
  invalidParams.fields = myValidationErrors;
  return new InvalidParamsException(invalidParams);
}
