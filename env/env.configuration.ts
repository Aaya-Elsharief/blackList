export const EnvironmentVariables = () => ({
  port: parseInt(process.env.PORT, 10) || 60000,
  app_name: process.env.APP_NAME,
  nodeEnv: process.env.NODE_ENV,
  mongodb: {
    connectionUrl: process.env.MONGODB_CONNECTION_URL,
    mongooseDebug: process.env.MONGOOSE_DEBUG === 'true',
  },
  jwt: {
    auth: {
      secret: process.env.JWT_AUTH_SECRET,
      expiresIn: process.env.JWT_AUTH_EXPIRESIN,
    },
  },
  redis: {
    password: process.env.REDIS_PASSWORD,
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },
});
