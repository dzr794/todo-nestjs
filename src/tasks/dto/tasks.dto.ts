import { IsDate, IsEnum, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsString } from "class-validator";

enum TaskStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE'
}

// Data Transfer Objects (DTOs)
export class GetTaskDto {
  @IsNotEmpty()
  @IsNumberString()
  id: string;
}

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;
}

export class EditTaskDto {
  @IsOptional()
  @IsString()
  title: string;  
  
  @IsOptional()
  @IsString()
  description: string;
  
  @IsOptional()
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
