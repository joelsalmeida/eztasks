import { NestFactory } from '@nestjs/core';
import { AppModule } from './App.module';

const PORT = 3001;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(PORT);

  console.log(`### Eztasks - back-end listening port: ${PORT}`);
}
bootstrap();
