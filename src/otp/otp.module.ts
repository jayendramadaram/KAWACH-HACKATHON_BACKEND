import { Module } from '@nestjs/common';
import { Global } from '@nestjs/common/decorators';
import { OtpService } from './otp.service';
@Global()
@Module({
  providers: [OtpService],
  exports: [OtpService],
})
export class OtpModule {}
