import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Twilio } from 'twilio';

@Injectable()
export class OtpService {
  private twilioClient: Twilio;

  constructor(private readonly configService: ConfigService) {
    const accountSid = configService.get('TWILIO_ACCOUNT_SID');
    const authToken = configService.get('TWILIO_AUTH_TOKEN');
    this.twilioClient = new Twilio(accountSid, authToken);
  }
  async sendotp(OTP: number, phnum: string): Promise<boolean> {
    const smsSent = await this.twilioClient.messages.create({
      to: phnum,
      body: `Heyy here is your crimeapp otp ${OTP}`,
      from: this.configService.get('TWILIO_PHONE_NUM'),
    });
    return !!smsSent.sid;
  }
}
