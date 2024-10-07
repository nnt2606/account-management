import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { SessionModule } from './session/session.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost:27017/account-management"),
    ConfigModule.forRoot({isGlobal: true}),
    AppModule,
    UsersModule,
    SessionModule,
    AuthModule,
  ]
})

export class AppModule {}
