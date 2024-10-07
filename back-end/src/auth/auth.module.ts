import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { SessionModule } from 'src/session/session.module';
import { UsersModule } from 'src/users/users.module';
import { jwtConstants } from './constants/constants';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    SessionModule,
    UsersModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: {expiresIn: '1 year'}
    })
  ],
  providers: [AuthService, JwtService],
  controllers: [AuthController]
})
export class AuthModule {}
