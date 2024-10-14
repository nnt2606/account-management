import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schema/user.schema';
import { LoggingModule } from 'src/logging/logging.module';

@Module({
  imports:[
    MongooseModule.forFeature([{name: 'users', schema: UserSchema}]),
    LoggingModule
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
