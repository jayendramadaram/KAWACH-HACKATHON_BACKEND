import {
  CacheModule,
  MiddlewareConsumer,
  Module,
  NestModule,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { LogRequest } from './middleware';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { OtpModule } from './otp/otp.module';
import * as ReddiStore from 'cache-manager-redis-store';
import { OtpService } from './otp/otp.service';
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

/**
 * Root Of the APP with request logging middleware implemented
 *  @alias ServeStaticModule used for serving this docs over (docs)[/docs] Documentation is generated in `documentation` file
 * @alias ConfigModule usedas Configservice to retrieve env elements
 * @alias CacheModule used to init reddis cache store with ttl 1200 `20min`
 */
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'documentation'),
      serveRoot: '/docs', // this will serve your files on /docs route
    }),

    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CacheModule.register({
      store: ReddiStore,
      password: 'qmvXege8CV0xSmddlkgEZlo4u3b9rWwJ',
      host: 'redis-18258.c305.ap-south-1-1.ec2.cloud.redislabs.com',
      port: 18258,
      isGlobal: true,
      ttl: 1200,
    }),
    AuthModule,
    PrismaModule,
    UserModule,
    OtpModule,
  ],
  providers: [PrismaService, AppService],
  controllers: [AppController],
})
export class AppModule implements NestModule {
  /**
   * Configuring the middleware for routes
   * @alias LogRequest middleware logs type of request and route
   */
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LogRequest).forRoutes('*');
  }
}
