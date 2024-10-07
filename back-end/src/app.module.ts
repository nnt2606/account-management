import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost:27017/account-management"),
    ConfigModule.forRoot({isGlobal: true}),
    UserModule,
    AuthModule
  ]
})

export class AppModule {}
