import { Module } from '@nestjs/common';
import { LoggingService } from './logging.service';
import { MongooseModule } from '@nestjs/mongoose';
import { loggingSchema } from './schema/logging.schema';
import { LoggingController } from './logging.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'logging', schema: loggingSchema}])
  ],
  providers: [LoggingService],
  exports: [LoggingService],
  controllers: [LoggingController]
})
export class LoggingModule {}
