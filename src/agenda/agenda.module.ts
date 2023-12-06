import { Global, Module } from '@nestjs/common';
import { ConfigurableModuleClass } from './agenda.module-definition';
import { AgendaService } from './agenda.service';

@Global()
@Module({
  providers: [AgendaService],
  exports: [AgendaService],
})
export class AgendaModule extends ConfigurableModuleClass {}
