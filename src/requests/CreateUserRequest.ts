import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserRequest {
  
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
  
}
