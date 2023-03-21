import { Module } from '@nestjs/common';
import { Global } from '@nestjs/common/decorators';
import { OtpService } from './otp.service';

/**
 *OTP service for other modules to inject and use
 */
@Global()
@Module({
  providers: [OtpService],
  exports: [OtpService],
})
export class OtpModule {}
