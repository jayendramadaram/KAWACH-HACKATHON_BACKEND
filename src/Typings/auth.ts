import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

export class AuthLogin {
  @IsNotEmpty()
  @IsPhoneNumber('IN')
  phnum: string;
  @IsString()
  @IsNotEmpty()
  password: string;
}
export class AuthSignup extends AuthLogin {
  constructor() {
    super();
  }
  @IsString()
  @IsNotEmpty()
  username: string;
}

export class EditUser {
  @IsOptional()
  @IsPhoneNumber('IN')
  phnum: string;
  @IsString()
  @IsOptional()
  password: string;
  @IsString()
  @IsOptional()
  username: string;
}

export class Phnum {
  @IsNotEmpty()
  @IsPhoneNumber('IN')
  phnum: string;
}

export class UserDTO {
  id: number;
  CreatedAt: string;
  UpdatedAt: string;
  phonenum: string;
  username: string;
  verfied: boolean;
}
