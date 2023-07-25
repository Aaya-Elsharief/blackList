import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './service/auth.service';
import { JwtStrategy } from './strategy/jwt.strategy';
import { LocalStrategy } from './strategy/local.strategy';
import { EnvironmentVariables } from 'env/env.configuration';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: EnvironmentVariables().jwt.auth.secret,
      signOptions: {
        algorithm: 'HS256',
        expiresIn: EnvironmentVariables().jwt.auth.expiresIn,
      },
    }),
  ],
  controllers: [],
  providers: [AuthService, JwtStrategy, LocalStrategy],
  exports: [AuthService],
})
export class AuthModule {}
