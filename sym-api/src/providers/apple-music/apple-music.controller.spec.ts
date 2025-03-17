import { Test, TestingModule } from '@nestjs/testing';
import { AppleMusicController } from './apple-music.controller';
import { AppleMusicService } from './apple-music.service';

describe('AppleMusicController', () => {
  let controller: AppleMusicController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppleMusicController],
      providers: [AppleMusicService],
    }).compile();

    controller = module.get<AppleMusicController>(AppleMusicController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
