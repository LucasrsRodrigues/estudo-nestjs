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
import { CreateCourseDTO } from './dto/create-course.dto';
import { UpdateCourseDTO } from './dto/update-course.dto';

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
  create(@Body() createCourseDTO: CreateCourseDTO) {
    return this.coursesService.crate(createCourseDTO);
  }

  @Patch(':id')
  update(
    @Param('id') idCourse: string,
    @Body() updateCourseDTO: UpdateCourseDTO,
  ) {
    return this.coursesService.update(idCourse, updateCourseDTO);
  }

  @Delete(':id')
  remove(@Param('id') idCourse: string) {
    return this.coursesService.remove(idCourse);
  }
}
