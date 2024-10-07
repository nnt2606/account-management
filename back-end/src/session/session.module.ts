import { Module } from '@nestjs/common';
import { SessionService } from './session.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SessionSchema } from './schema/session.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'session', schema: SessionSchema}])
  ],
  controllers: [],
  providers: [SessionService],
  exports: [SessionService]
})
export class SessionModule {}
