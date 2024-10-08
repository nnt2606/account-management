import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import session from 'express-session';
import passpost from 'passport';
import MongoStore from 'connect-mongo';


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
      },
      store: MongoStore.create({
        mongoUrl: 'mongodb://localhost/account-management',
        collectionName: 'sessions',
        autoRemove: 'native',
      })
    })
  );

  app.use(passpost.initialize());
  app.use(passpost.session());

  await app.listen(3000);
 
}
bootstrap();
