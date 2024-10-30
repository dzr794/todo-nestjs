import { Injectable, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Task, TaskStatus } from './entities';
import { CreateTaskDto, EditTaskDto } from './dto';

@Injectable()
export class TasksService {
  constructor(
    private prisma: PrismaService,
  ) {}


  // getAllTasks(): Promise<Task[]> {
    // return this.prisma.task.findMany();
  async getAllTasks(userId: number) {

    try {
      const allTasks = await this.prisma.task.findMany({
        where: {
          userId: userId,
        }
      });

      return allTasks;

    } catch (error) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
  }

  async getTask(userId: number, id: number) {
    
    try {
      const task = await this.prisma.task.findUnique({
        where: {
          userId: userId,
          id: id,
        }
      });
      
      if (!task) throw new NotFoundException('Task not found');
      
      return task;

    } catch (error) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
  }

  async createTask(userId: number, dto: CreateTaskDto) {

    try {
      const createdTask = await this.prisma.task.create({
        data:{
          userId,
          title: dto.title,
          description: dto.description,
          status: TaskStatus.PENDING,
        }
      });

      console.log('Task created:', createdTask);
      
      if (createdTask) 
        return createdTask;

    } catch (error) {
      throw new HttpException('Task could not be created', HttpStatus.CONFLICT);
    }
    
  }

  async editTask(userId: number, id: number, dto: EditTaskDto) {
    
    try {
      const updatedTask = await this.prisma.task.update({
        where: {
          userId: userId,
          id: id,
        },
        data: {
          title: dto.title,
          description: dto.description,
          status: dto.status,
        }
      })
      
      if (updatedTask)
        return updatedTask;

    } catch (error) {
      throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
    }

  }

  async deleteTask(userId: number, id: number) {
    
    try {
      const deletedTask = await this.prisma.task.delete({
      where: {
        userId: userId,
        id: id,
      }
    });
      
      if (deletedTask)
        return deletedTask;
      
    } catch (error) {
      throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
    }
  }
}
