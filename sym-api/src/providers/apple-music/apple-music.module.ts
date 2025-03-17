import { Module } from '@nestjs/common';
import { AppleMusicService } from './apple-music.service';
import { AppleMusicController } from './apple-music.controller';

@Module({
  controllers: [AppleMusicController],
  providers: [AppleMusicService],
})
export class AppleMusicModule {}
