import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';
import { IsEmailExists } from '../custom-validation-rules/email-exists.validation';

export class CreateUserDto {
  @IsOptional()
  fullName: string;

  @IsNotEmpty()
  @IsEmail()
  @IsEmailExists()
  email: string;

  @IsNotEmpty()
  password: string;
}
