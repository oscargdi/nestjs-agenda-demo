import { NestFactory } from '@nestjs/core';
import { Agenda } from 'agenda';
// @ts-expect-error Agendash is not typed
import * as Agendash from 'agendash';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const agenda = app.get<Agenda>(Agenda);

  app.use('/agendash', Agendash(agenda));

  await app.listen(3000);
}
bootstrap();
