import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AppleMusicService } from './apple-music.service';
import { CreateAppleMusicDto } from './dto/create-apple-music.dto';
import { UpdateAppleMusicDto } from './dto/update-apple-music.dto';

@Controller('apple-music')
export class AppleMusicController {
  constructor(private readonly appleMusicService: AppleMusicService) {}

  @Post()
  create(@Body() createAppleMusicDto: CreateAppleMusicDto) {
    return this.appleMusicService.create(createAppleMusicDto);
  }

  @Get()
  findAll() {
    return this.appleMusicService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appleMusicService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAppleMusicDto: UpdateAppleMusicDto) {
    return this.appleMusicService.update(+id, updateAppleMusicDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appleMusicService.remove(+id);
  }
}
