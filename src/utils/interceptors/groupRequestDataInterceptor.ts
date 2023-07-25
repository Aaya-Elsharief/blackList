import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class groupRequestDataInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    if (request.body && request.params) {
      Object.keys(request.params).map((paramKey) => {
        request.body[`${paramKey}`] = request.params[`${paramKey}`];
      });
    }

    if (request.query && request.params) {
      Object.keys(request.params).map((paramKey) => {
        request.query[`${paramKey}`] = request.params[`${paramKey}`];
      });
    }

    return next.handle();
  }
}
