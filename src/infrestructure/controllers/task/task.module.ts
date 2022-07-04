import { Module } from '@nestjs/common';
import { TaskUserCases } from 'src/usecases/task/task-user-cases';
import { TaskController } from './task/task.controller';
import { TaskModuleUsercases } from 'src/usecases/task/task.module';

@Module({
  imports:[TaskModuleUsercases],
  controllers: [TaskController],
  providers:[TaskUserCases]
})
export class TaskModule {}
