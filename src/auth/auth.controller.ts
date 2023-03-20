import { Controller, Post, Get, Body } from '@nestjs/common';
import { AuthLogin, AuthSignup, Phnum } from 'src/Typings';
import { AuthService } from './auth.service';

/**
 * Controller to take all requests and send responses
 *
 * - /Signup
 * - /Signin
 * - /verfiyphno
 * - /forgotpw
 * - /verifyotp
 */
@Controller('auth')
export class AuthController {
  constructor(private AuthService: AuthService) {}

  @Post('/Signup')
  Signup(@Body() body: AuthSignup): Promise<object> {
    return this.AuthService.signupLogic(body);
  }

  @Post('/Signin')
  Login(@Body() body: AuthLogin): Promise<object> {
    return this.AuthService.loginLogic(body);
  }

  @Post('/requestOtp')
  ForgotPwd(@Body() body: Phnum): Promise<object> {
    console.log(body.phnum);
    return this.AuthService.forgotpasswordLogic(body.phnum);
  }

  @Post('/verifyOTP')
  verifyOTP(
    @Body('OTP') OTP: number,
    @Body('email') email: string,
  ): Promise<object> {
    return this.AuthService.verifyLogic(OTP, email);
  }

  /**
   * Sample Testing Route
   */
  @Get('/hehe')
  test(@Body('email') email?: string): string {
    return 'hehe';
  }
}
