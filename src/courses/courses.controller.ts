import { Controller, Get, Param } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get()
  findAll() {
    const response = [
      {
        message: 'Listagem de cursos',
      },
    ];

    return response;
  }

  @Get(':id')
  findOne(@Param('id') idCourse: string) {
    return {
      curso: `Curso #${idCourse}`,
    };
  }
}
