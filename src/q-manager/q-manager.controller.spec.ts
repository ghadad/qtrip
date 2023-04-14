import { Test, TestingModule } from '@nestjs/testing';
import { QManagerController } from './q-manager.controller';

describe('QManagerController', () => {
  let controller: QManagerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QManagerController],
    }).compile();

    controller = module.get<QManagerController>(QManagerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
