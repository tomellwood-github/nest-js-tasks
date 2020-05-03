import { IsString, MinLength, MaxLength, Matches } from 'class-validator';

export class AuthCredentialsDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(/(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[@$!%*#?&]).*$/, {
    message:
      'Password must contain at least one lowercase letter, one uppsercase letter, one number, and one special character',
  })
  password: string;
}
