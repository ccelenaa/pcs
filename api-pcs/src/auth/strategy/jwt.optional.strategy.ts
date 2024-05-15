import { Injectable, Req } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Request } from "express";
import { ExtractJwt, Strategy } from "passport-jwt";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class JwtOptionalStrategy extends PassportStrategy(Strategy, 'jwt.optional.strategy') {
  constructor(private config: ConfigService, private prisma: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        JwtOptionalStrategy.extractJWT,
        ExtractJwt.fromAuthHeaderAsBearerToken()
      ]),
      ignoreExpiration: false,
      secretOrKey: config.get('jwt_secret')
    });
  }

  async validate(payload: {
    sub: string,
    email: string,
    login: string
  }) {
    const account = await this.prisma.account.findFirst({
      where: {
        id: payload.sub
      },
      include: {
        members: true
      }
    });

    if (!account) {
      return null;
    }
    
    delete account.password;
    return account;
  }

  private static extractJWT(req: Request): string | null {
    return req.cookies['token'];
  }
}