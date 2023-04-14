import { Test, TestingModule } from '@nestjs/testing';
import { QManagerService } from './q-manager.service';

describe('QManagerService', () => {
  let service: QManagerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QManagerService],
    }).compile();

    service = module.get<QManagerService>(QManagerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
