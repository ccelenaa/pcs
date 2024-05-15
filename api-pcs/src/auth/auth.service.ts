import { ForbiddenException, Injectable } from '@nestjs/common';
import { SignupDto } from './dto/signup.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { SigninDto } from './dto';

@Injectable()
export class AuthService {
  constructor (private config: ConfigService, private prisma: PrismaService, private jwt: JwtService) {

  }

  async signup(auth: SignupDto) {
    console.log('head ', {auth});
    const hash = await argon.hash(auth.password);

    try {
      const account = await this.prisma.account.create({
        data: {...auth, password: hash}
      });

      delete account.password;
      return account;
    } catch (error) {
      if(error instanceof PrismaClientKnownRequestError) {
        if(error.code == 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }

      throw error;
    }
  }

  async signin(auth: SigninDto) {
    const account = await this.prisma.account.findFirst({
      where: {
        OR: [
          {
            email: auth.login
          },{
            login: auth.login
          }
        ]
      },
    });

    if(!account || !await argon.verify(account.password, auth.password)) {
      throw new ForbiddenException('Credentials incorrect');
    }

    delete account.password;
    return account;
  }


  async signToken(userId: string, email: string): Promise<string> {
    const payload = {
      sub: userId,
      email
    };

    const secret = this.config.get('jwt_secret');

    return await this.jwt.signAsync(payload, {
      expiresIn: '5h',
      secret
    });
  }
}
