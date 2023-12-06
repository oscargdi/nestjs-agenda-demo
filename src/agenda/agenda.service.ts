import { Inject, Injectable } from '@nestjs/common';
import { Agenda, AgendaConfig } from 'agenda';
import { MODULE_OPTIONS_TOKEN } from './agenda.module-definition';

@Injectable()
export class AgendaService {
  private agenda: Agenda;

  constructor(@Inject(MODULE_OPTIONS_TOKEN) private options: AgendaConfig) {
    this.agenda = new Agenda(options);
  }

  async start() {
    await this.agenda.start();
  }

  async stop() {
    await this.agenda.stop();
  }

  async close() {
    await this.agenda.close();
  }
}
