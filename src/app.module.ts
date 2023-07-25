import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { EnvironmentVariables } from 'env/env.configuration';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';
import { CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-yet';

@Module({
  imports: [
    /**
     * ConfigModule for environments variables
     */
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `${process.cwd()}/env/${process.env.NODE_ENV}.env`,
      load: [EnvironmentVariables],
    }),
    /**
     * Mongoose Module
     * (NOTE - the following plugins are registered for all schemas at once INSTEAD of register them each time we create new schema)
     */
    MongooseModule.forRoot(EnvironmentVariables().mongodb.connectionUrl, {
      connectionFactory: (nativeMongooseConnection) => {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        nativeMongooseConnection.plugin(require('mongoose-paginate-v2'));
        nativeMongooseConnection.plugin(
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          require('mongoose-aggregate-paginate-v2'),
        );
        return nativeMongooseConnection;
      },
    }),

    CacheModule.registerAsync({
      isGlobal: true,
      useFactory: async () => ({
        store: await redisStore({
          password: EnvironmentVariables().redis.password,
          socket: {
            host: EnvironmentVariables().redis.host,
            port: +EnvironmentVariables().redis.port,
          },
        }),
      }),
    }),
    AuthModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
