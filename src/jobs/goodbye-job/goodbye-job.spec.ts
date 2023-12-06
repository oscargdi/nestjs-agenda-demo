import { Test, TestingModule } from '@nestjs/testing';
import { GoodbyeJob } from './goodbye-job';

describe('GoodbyeJob', () => {
  let provider: GoodbyeJob;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GoodbyeJob],
    }).compile();

    provider = module.get<GoodbyeJob>(GoodbyeJob);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
