import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';
import { EditUser, UserDTO } from 'src/Typings';
import * as argon from 'argon2';

/**
 * Userservice service to handle user related CRUD
 */
@Injectable()
export class UserService {
  constructor(private postgre: PrismaService, private config: ConfigService) {}

  /**
   *
   * @param User @type  {EditUser}
   * @param dbuser @type {UserDTO}
   * @returns
   */
  async editUser(User: EditUser, dbuser: UserDTO) {
    /**
     * hash password from request payload if pas exisit
     * update using postgres prisma ORM
     */
    if (User.password) {
      const hash = await argon.hash(User.password);
      delete User.password;
      const user = await this.postgre.user.update({
        where: {
          id: dbuser.id,
        },
        data: {
          ...User,
          password: hash,
        },
      });
      delete user.password;
      return user;
    } else {
      const user = await this.postgre.user.update({
        where: {
          id: dbuser.id,
        },
        data: {
          ...User,
        },
      });
      delete user.password;
      return user;
    }
  }
}
