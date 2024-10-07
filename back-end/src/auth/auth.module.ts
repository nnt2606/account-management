import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/users/schema/user.schema';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategty } from './utils/LocalStrategy';
import { SessionSerializer } from './utils/SessionSerializer';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'users', schema: UserSchema}]),
    UsersModule,
   
  ],
  providers: [
    AuthService, 
    LocalStrategty,
    SessionSerializer,
  ],
  controllers: [AuthController]
})
export class AuthModule {}
