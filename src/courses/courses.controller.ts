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

@Controller('courses')
export class CoursesController {
  @Get()
  findAll(@Res() response) {
    const send = [
      {
        message: 'Listagem de cursos',
      },
    ];

    return response.status(200).send(send);
  }

  @Get(':id')
  findOne(@Param('id') idCourse: string) {
    return {
      curso: `Curso #${idCourse}`,
    };
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') idCourse: string, @Body() body) {
    return `Atualização do Curso #${idCourse}`;
  }

  @Delete(':id')
  remove(@Param('id') idCourse: string) {
    return {
      curso: `Curso #${idCourse} Apagado!`,
    };
  }
}
