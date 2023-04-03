import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants } from 'src/Tools/contains';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), //fromHeader('jwt') / fromAuthHeaderWithScheme('jwt')
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payLoad: any) {
    //look in database for a role?

    return {
      userId: payLoad.sub,
      email: payLoad.email,
      role: payLoad.role,
    };
  }
}
