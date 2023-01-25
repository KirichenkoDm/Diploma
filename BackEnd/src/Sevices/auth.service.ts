import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/Sevices/user.service';
const bcrypt = require('bcrypt');


@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) {}

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.userService.signIn(email);
        if (user && bcrypt.compare(user.password, password)) {
            return user;
        }
        return null;
    }

    async login (user: any) {
        const payload = { 
            email: user.email, 
            sub: user._id,
            role: user.role
        }
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}