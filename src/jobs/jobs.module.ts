import { Module } from '@nestjs/common';
import { GreetingJob } from './greeting-job/greeting-job';
import { GoodbyeJob } from './goodbye-job/goodbye-job';

@Module({
  providers: [GreetingJob, GoodbyeJob]
})
export class JobsModule {}
