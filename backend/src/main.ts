import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Enable CORS
  app.enableCors({
    origin: 'http://192.168.29.195:3000', // Replace with your frontend's origin
    credentials: true, // If your frontend is sending cookies or using HTTP authentication
  });

  await app.listen(3001);
}
bootstrap();
