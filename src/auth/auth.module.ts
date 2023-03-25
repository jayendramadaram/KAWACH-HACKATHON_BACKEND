import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './JwtStrategy';
import { OtpModule } from 'src/otp/otp.module';

/**
 * Module is where we define all dependecies and relationships for nestjs application graph
 */
@Module({
  /**
   * things that have to be injected into controllers
   */
  providers: [AuthService, JwtStrategy],

  // the controllers in this module
  controllers: [AuthController],

  // Modules required for this module
  imports: [JwtModule.register({}), OtpModule],

  // the subset of providers that are provided by this module and should be available in other modules which import this module.
  exports: [],
})
export class AuthModule {}
