import {
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';
import { ValidationErrorCodes } from 'src/utils/constants/validation-error-codes';
import { Injectable } from '@nestjs/common';
import { UserService } from '../services/user.service';

/**
 * NOTE::Rule name must be the same as the error message key located at ValidationErrorCodes map
 * Example:
 * In case of the rule name = "emailIsExists", then you must add key : value like the following at "validation-error-codes.ts"
 * 'emailIsExists': {
        en: 'Email have been used before',
        ar: 'الايميل مستخدم من قبل مستخدم اخر',
    }
 */
@ValidatorConstraint({ name: 'emailIsExists', async: true })
@Injectable()
export class IsEmailExistsRule implements ValidatorConstraintInterface {
  constructor(private userSerivse: UserService) {}

  public async validate(value: string) {
    if (value == undefined) return false;

    const document = await this.userSerivse.getUserByEmail(value);
    if (document != null) {
      // already exists
      return false;
    }
    return true;
  }

  public defaultMessage(args: ValidationArguments) {
    return JSON.stringify(ValidationErrorCodes['IsEmailExists']);
  }
}

/**
 * The following register our custom decorator "@IsEmailExists" at Nestjs
 * This help with validation & allow us to use it as NORMAL decorator
 * Example: use it like this @IsEmailExists() instead of => @Validate(EmailExistsRule)
 * @param validationOptions
 * @constructor
 */
export function IsEmailExists(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'IsEmailExists',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: IsEmailExistsRule,
    });
  };
}
