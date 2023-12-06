import { Test, TestingModule } from '@nestjs/testing';
import { GreetingJob } from './greeting-job';

describe('GreetingJob', () => {
  let provider: GreetingJob;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GreetingJob],
    }).compile();

    provider = module.get<GreetingJob>(GreetingJob);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
