export enum TaskStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE'
}

export class Task {
  id?: string;
  userId: number;
  title: string;
  description: string;
  status: TaskStatus;
  createdAt?: Date;
  updatedAt?: Date;
}
