import { Injectable, NotFoundException } from '@nestjs/common';
import { CourseEntity } from './entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(CourseEntity)
    private readonly courseRepository: Repository<CourseEntity>,
  ) { }

  async findAll() {
    return await this.courseRepository.find();
  }

  async findOne(id: string) {
    const course = await this.courseRepository.findOne({
      where: {
        id,
      },
    });

    if (!course) {
      throw new NotFoundException(`Course ID ${id} not found`);
    }

    return course;
  }

  async crate(createCourseDTO: any) {
    const course = this.courseRepository.create(createCourseDTO);

    return await this.courseRepository.save(course);
  }

  async update(id: string, updateCourseDTO: any) {
    const course = await this.courseRepository.preload({
      id: +id,
      ...updateCourseDTO,
    });

    if (!course) {
      throw new NotFoundException(`Course ID ${id} not found`);
    }

    return await this.courseRepository.save(course);
  }

  async remove(id: string) {
    const course = await this.courseRepository.findOne(id);

    if (!course) {
      throw new NotFoundException(`Course ID ${id} not found`);
    }

    return await this.courseRepository.remove(course);
  }
}
