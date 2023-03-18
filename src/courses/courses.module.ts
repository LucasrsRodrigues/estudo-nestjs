import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseEntity, TagEntity } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([CourseEntity, TagEntity])],
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule { }
