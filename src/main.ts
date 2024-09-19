declare const module: any;
import * as express from 'express'
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthModule } from './auth/auth.module';
import { GoogleModule } from './googlehome/google.module';
import * as bodyParse from 'body-parser'

let demoLogger = (req, res, next) => {
  console.error("Intercepting requests ...", req.url);
  console.error("Intercepting requests ...", req.query);
  console.error("Intercepting body ...", req.body);
  console.error("Intercepting header ...", req.headers);
  next(); // call next() here to move on to next middleware/router
};

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  app.use(express.json())
  app.use(express.urlencoded({extended: true}));

  await app.listen(3000, () => {
    console.log(`Server is running on port: 3000`);
  });

  const smarthome = await NestFactory.create(GoogleModule);
  smarthome.use(bodyParse.json())
  smarthome.use(demoLogger)

  await smarthome.listen(7000, () => {
    console.log(`Server is running on port: 7000`);
  });

}

bootstrap();
