import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskController } from './infrestructure/controllers/task/task/task.controller';

@Module({
  imports: [],
  controllers: [TaskController],
 
})
export class AppModule {}
