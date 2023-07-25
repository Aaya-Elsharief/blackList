import {
  BadRequestException,
  ExecutionContext,
  Inject,
  Injectable,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ModuleRef, Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from '../roles/decorators/public.decorator';
import { Cache } from 'cache-manager';
import { ErrorCodes } from 'src/utils/constants/error-codes';
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  /**
   * Note :: constructor & canActivate added for JwtAuthGuard only to allow public accessible routes
   * I added this after applying RolesGuard
   * @param reflector
   * @param moduleRef
   */
  constructor(
    private reflector: Reflector,
    private moduleRef: ModuleRef,
    @Inject('CACHE_MANAGER') private cacheManager: Cache,
  ) {
    super();
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }

    const parentCanActivate = (await super.canActivate(context)) as boolean; // this is necessary due to possibly returning `boolean | Promise<boolean> | Observable<boolean>

    /**
     * Fetch user to check if active on the company or not
     */
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    let isApiJwtToken = false;
    if (user.tokenType && user.tokenType === 'apiJwtToken') {
      isApiJwtToken = true;
    }

    const isRevocked = await this.cacheManager.get(`token:${user.token}`);

    if (isRevocked) {
      const err = ErrorCodes.UNAUTHORIZED;
      throw new BadRequestException(err);
    }
    const isValid = parentCanActivate && isApiJwtToken;
    return isValid;
   }
}
