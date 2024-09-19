declare const module: any;
import * as express from 'express'
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthModule } from './auth/auth.module';
import { GoogleModule } from './googlehome/google.module';
import * as bodyParse from 'body-parser'

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  app.use(express.json())
  app.use(express.urlencoded({extended: true}));

  await app.listen(3000, () => {
    console.log(`Server is running on port: 3000`);
  });

  const smarthome = await NestFactory.create(GoogleModule);
  smarthome.use(bodyParse.json())
  smarthome.use(express.json())
  smarthome.use(express.urlencoded({extended: true}));

  await smarthome.listen(7000, () => {
    console.log(`Server is running on port: 7000`);
  });

}

bootstrap();
