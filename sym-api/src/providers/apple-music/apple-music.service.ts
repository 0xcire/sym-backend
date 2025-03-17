import { Injectable } from '@nestjs/common';
import { CreateAppleMusicDto } from './dto/create-apple-music.dto';
import { UpdateAppleMusicDto } from './dto/update-apple-music.dto';

@Injectable()
export class AppleMusicService {
  create(createAppleMusicDto: CreateAppleMusicDto) {
    return 'This action adds a new appleMusic';
  }

  findAll() {
    return `This action returns all appleMusic`;
  }

  findOne(id: number) {
    return `This action returns a #${id} appleMusic`;
  }

  update(id: number, updateAppleMusicDto: UpdateAppleMusicDto) {
    return `This action updates a #${id} appleMusic`;
  }

  remove(id: number) {
    return `This action removes a #${id} appleMusic`;
  }
}
