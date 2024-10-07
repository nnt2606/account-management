import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passpost from 'passport';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.use(
    session({
      name: 'SID',
      secret: 'my-secret',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 60*60*1000,
        secure: false
      }
    })
  );

  app.use(passpost.initialize());
  app.use(passpost.session());

  await app.listen(3000);
 
}
bootstrap();
