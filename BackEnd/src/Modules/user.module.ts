import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from 'src/Controllers/user.controller';
import { JwtAuthGuard } from 'src/Guards/jwt-auth.guatd';
import { userSchema } from 'src/Schemas/user.schema';
import { UserService } from 'src/Sevices/user.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: userSchema }])],
  exports: [UserService],
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class UserModule {}
