/* eslint-disable @typescript-eslint/no-var-requires */
import { Module } from '@nestjs/common';
import { getConnectionToken, MongooseModule } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

import { UserRepository } from './repositories/user.repository';
import { User, USER_COLLECTION_NAME, UserSchema } from './schemas/user.schema';
import { UserService } from './services/user.service';
import { IsEmailExistsRule } from './custom-validation-rules/email-exists.validation';
import { UserController } from './controllers/user.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: USER_COLLECTION_NAME,
        useFactory: async (nativeMongooseConnection: Connection) => {
          const schema = UserSchema;
          return schema;
        },

        inject: [getConnectionToken()],
      },
    ]),
    JwtModule.register({
      secret:
        '615020970b2c264598a667c20f10355b0663bbb45f682c839eea9e345f43cfd2',
      signOptions: {
        algorithm: 'HS256',
        expiresIn: 31536000,
      },
    }),
  ],
  controllers: [UserController],
  providers: [UserService, UserRepository, IsEmailExistsRule],
  exports: [UserService, UserRepository],
})
export class UserModule {}
