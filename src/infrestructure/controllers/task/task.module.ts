import { Module } from '@nestjs/common';
import { TaskUserCases } from 'src/usecases/task/task-user-cases';
import { TaskController } from './task/task.controller';

@Module({
  controllers: [TaskController],
  providers:[TaskUserCases]
})
export class TaskModule {}
