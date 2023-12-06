import { Inject, Injectable } from '@nestjs/common';
import { Agenda } from 'agenda';
import AgendaJob from '../jobs.interface';

@Injectable()
export class GoodbyeJob implements AgendaJob {
  name = 'goodbye-job';

  constructor(@Inject(Agenda) private readonly agenda: Agenda) {
    this.agenda.define(this.name, this.run.bind(this));
    this.agenda.every('10 seconds', this.name);
  }

  async run(): Promise<void> {
    console.log('Goodbye, World!');
  }
}
