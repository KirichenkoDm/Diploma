import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './Modules/user.module';
import { CourseModule } from './Modules/course.module';
import { MaterialModule } from './Modules/material.module';
import { AuthModule } from './Modules/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/', {
      dbName: 'courseProjectDb',
    }),
    UserModule,
    CourseModule,
    MaterialModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
