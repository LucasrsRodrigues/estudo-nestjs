import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) { }

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') idCourse: string) {
    return this.coursesService.findOne(idCourse);
  }

  @Post()
  create(@Body() body) {
    return this.coursesService.crate(body);
  }

  @Patch(':id')
  update(@Param('id') idCourse: string, @Body() body) {
    return this.coursesService.update(idCourse, body);
  }

  @Delete(':id')
  remove(@Param('id') idCourse: string) {
    return this.coursesService.remove(idCourse);
  }
}
