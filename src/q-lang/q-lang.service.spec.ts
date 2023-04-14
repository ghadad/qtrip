import { Test, TestingModule } from '@nestjs/testing';
import { QLangService } from './q-lang.service';

describe('QLangService', () => {
  let service: QLangService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QLangService],
    }).compile();

    service = module.get<QLangService>(QLangService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
