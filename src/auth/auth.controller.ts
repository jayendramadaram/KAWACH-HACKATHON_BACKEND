import { Controller, Post, Get, Body } from '@nestjs/common';
import { AuthLogin, AuthSignup, Phnum } from 'src/Typings';
import { AuthService } from './auth.service';

/**
 * Controller to take all requests and send responses
 * Prefix --> /auth
 *
 * Routes available [NO JWT PASS REQUIRED]
 * - /Signup
 * - /Signin
 * - /requestOtp
 * - /verifyOTP
 * - /hehe
 */
@Controller('auth')
export class AuthController {
  constructor(private AuthService: AuthService) {}

  /**
   *
   * @param body @type {AuthSignup} send body of this format
   * @returns JWT
   */
  @Post('/Signup')
  Signup(@Body() body: AuthSignup): Promise<object> {
    return this.AuthService.signupLogic(body);
  }

  /**
   *
   * @param body @type {AuthLogin}
   * @returns
   */
  @Post('/Signin')
  Login(@Body() body: AuthLogin): Promise<object> {
    return this.AuthService.loginLogic(body);
  }

  /**
   *
   * @param body @type {Phnum}
   * @returns
   */
  @Post('/requestOtp')
  ForgotPwd(@Body() body: Phnum): Promise<object> {
    console.log(body.phnum);
    return this.AuthService.forgotpasswordLogic(body.phnum);
  }

  /**
   *
   * @param OTP @type {number}
   * @param phnum @type {Phnum}
   * @returns
   */
  @Post('/verifyOTP')
  verifyOTP(
    @Body('OTP') OTP: number,
    @Body('phnum') email: string,
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
