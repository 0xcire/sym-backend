import { PartialType } from '@nestjs/mapped-types';
import { CreateAppleMusicDto } from './create-apple-music.dto';

export class UpdateAppleMusicDto extends PartialType(CreateAppleMusicDto) {}
