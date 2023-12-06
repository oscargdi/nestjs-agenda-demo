import { Global, Module } from '@nestjs/common';
import { Agenda, AgendaConfig } from 'agenda';
import {
  ConfigurableModuleClass,
  MODULE_OPTIONS_TOKEN,
} from './agenda.module-definition';

@Global()
@Module({
  providers: [
    {
      provide: Agenda,
      useFactory: async (options: AgendaConfig) => {
        const agenda = new Agenda(options);
        await agenda.start();
        return agenda;
      },
      inject: [MODULE_OPTIONS_TOKEN],
    },
  ],
  exports: [Agenda],
})
export class AgendaModule extends ConfigurableModuleClass {}
