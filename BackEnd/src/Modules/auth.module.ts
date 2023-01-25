import { Module } from '@nestjs/common';
import { AuthService } from '../Sevices/auth.service';
import { UserModule } from './user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from '../Strategies/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/Tools/contains';
import { JwtStrategy } from 'src/Strategies/jwt.strategy';

@Module({
    imports: [
        UserModule,
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '3600s' }
        }),
    ],
    providers: [
        AuthService,
        LocalStrategy,
        JwtStrategy,
    ],
    exports: [
        AuthService,
    ]
})
export class AuthModule {}