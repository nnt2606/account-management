import { Body, Controller, Post } from '@nestjs/common';
import { LoggingService } from './logging.service';

@Controller('logging')
export class LoggingController {
    constructor(
        private loggingService: LoggingService
    ){}

    @Post("/get")
    getUserLogging(@Body() id: string){
        return this.loggingService.getLogUser(id);
    }
}
