import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost:27017/account-management"),
    AppModule,
    UsersModule,
    AuthModule,
    PassportModule.register({
      session: true,
    }),
  ]
})

export class AppModule {}
