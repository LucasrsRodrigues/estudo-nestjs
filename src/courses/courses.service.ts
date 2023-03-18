import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CourseEntity } from './entities';

@Injectable()
export class CoursesService {
  private courses: Array<CourseEntity> = [
    {
      id: 1,
      name: 'Fundamentos do framework NestJS',
      description: 'Fundamentos do framework NestJS',
      tags: ['nest', 'node.js', 'typescript'],
    },
  ];

  findAll() {
    return this.courses;
  }

  findOne(id: string) {
    const course = this.courses.find((item) => item.id === Number(id));

    if (!course) {
      throw new HttpException(
        `335 - Course ID ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }

    return course;
  }

  crate(createCourseDTO: any) {
    const data = {
      id: this.courses.length + 1,
      ...createCourseDTO,
    };

    this.courses.push(data);

    return data;
  }

  update(id: string, updateCourseDTO: any) {
    const existingCourse = this.courses.findIndex(
      (item) => item.id === Number(id),
    );

    this.courses[existingCourse] = updateCourseDTO;

    return true;
  }

  remove(id: string) {
    const indexCourse = this.courses.findIndex(
      (item) => item.id === Number(id),
    );

    if (indexCourse >= 0) {
      this.courses.splice(indexCourse, 1);
    }
  }
}