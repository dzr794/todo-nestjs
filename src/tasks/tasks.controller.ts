import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, EditTaskDto, GetTaskDto } from './dto';
import { GetCurrentUserId } from 'src/common/decorators';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  
  @Get()
  @HttpCode(HttpStatus.OK)
  getAllTasks(@GetCurrentUserId() userId: number, ) {
    return this.tasksService.getAllTasks(userId);
  }


  @Get(':id')
  @HttpCode(HttpStatus.OK)
  getTask(
    @GetCurrentUserId() userId: number,
    @Param() getDto: GetTaskDto,
  ) {
    return this.tasksService.getTask(userId, parseInt(getDto.id));
  }
  @Post()
  @HttpCode(HttpStatus.CREATED)
  createTask(
    @GetCurrentUserId() userId: number,
    @Body() createDto: CreateTaskDto,
  ) {
    return this.tasksService.createTask(userId, createDto);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  editTask(
    @GetCurrentUserId() userId: number,
    @Param() getDto: GetTaskDto, 
    @Body() editDto: EditTaskDto,
  ) {
    console.log({getDto})
    return this.tasksService.editTask(userId, parseInt(getDto.id), editDto);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  editPutTask(
    @GetCurrentUserId() userId: number,
    @Param() getDto: GetTaskDto, 
    @Body() editDto: EditTaskDto,
  ) {
    console.log({getDto})
    return this.tasksService.editTask(userId, parseInt(getDto.id), editDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteTask(
    @GetCurrentUserId() userId: number,
    @Param() getDto: GetTaskDto,
  ) {
    return this.tasksService.deleteTask(userId, parseInt(getDto.id));
  }

  
}
