import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user.service';
import { Request } from 'express';
import { AuthSignup, EditUser, UserDTO } from 'src/Typings';

/**
 * Controller for User routs
 * - get UserInfo and Saved Posts
 * - Change Password or body
 */
interface AuthRequest extends Request {
  user: UserDTO; // Replace `any` with the actual type of the `user` property
}

@UseGuards(AuthGuard('jwt'))
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  /**
   *
   * @param req @type {UserDTO} Incoming req GET route
   * @returns {object} user payload
   */
  @Get('me')
  MyData(@Req() req: Request): object {
    return req.user;
  }

  /**
   * pass update user object and feilds are optional there can be pw or not but need to pass valid JWT in header
   * @param User @type {EditUser} edit user payload
   * @param req @type {EditUser} Incoming req with JWT in header
   * @returns
   */
  @Post('edit')
  EditMyData(@Body() User: EditUser, @Req() req: AuthRequest) {
    return this.userService.editUser(User, req.user);
  }
}
