import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './Guards/local-auth.guard';
import { AuthService } from './Sevices/auth.service';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
