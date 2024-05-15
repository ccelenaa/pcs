import { 
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Res,
  Headers,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto, SigninDto } from './dto';
import { Response } from 'express';
import { ConfigService } from '@nestjs/config';

@Controller('auth')
export class AuthController {
  private cookieOptions = null;

  constructor(private readonly authService: AuthService, private configService: ConfigService) {
    this.cookieOptions = {
      path: '/',
      secure: true,
      httpOnly: true,
      sameSite: 'none', // none, lax, strict,
      domain: configService.get('domain'),
    };
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('signup')
  async signup(@Res({passthrough: true}) res: Response, @Body() dto: SignupDto) {
    const account = await this.authService.signup(dto);
    const cookie: string = await this.authService.signToken(account.id, account.email);

    res.cookie('token', cookie, this.cookieOptions);

    return account;
  }


  @HttpCode(HttpStatus.OK)
  @Post('signin')
  async signin(@Headers('origin') origin: String, @Res({passthrough: true}) res: Response, @Body() dto: SigninDto) {
    console.log({origin});

    const account = await this.authService.signin(dto);

    const cookie: string = await this.authService.signToken(account.id, account.email);

    res.cookie('token', cookie, this.cookieOptions);

    return account;
  }


  @HttpCode(HttpStatus.NO_CONTENT)
  @Post('signout')
  signout(@Res({passthrough: true}) res: Response) {
    res.clearCookie('token', this.cookieOptions);
  }
}
