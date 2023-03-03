import { IsString, IsNotEmpty, IsEmail, Length } from 'class-validator';
import { IsEmailExists } from 'src/validation/EmailExists';
import { IsUsernameExists } from 'src/validation/UsernameExists';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  user_firstname: string;

  @IsString()
  @IsNotEmpty()
  user_lastname: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @IsEmailExists('user_email')
  user_email: string;

  @IsString()
  @IsNotEmpty()
  @Length(8, 100)
  @IsUsernameExists('user_username')
  user_username: string;

  @IsString()
  @IsNotEmpty()
  @Length(9, 15)
  user_phone_number: string;

  @IsString()
  @IsNotEmpty()
  @Length(8, 100)
  user_password: string;
}
