import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseConfig } from './infrestructure/config/config';
import { TaskModule  as TaskModuleController } from './infrestructure/controllers/task/task.module';



@Module({
  imports: [ConfigModule.forRoot({
    isGlobal:true
  }),
  TypeOrmModule.forRootAsync({
    useClass:DatabaseConfig,
    inject:[DatabaseConfig],
    
  }), TaskModuleController],
  
  providers:[DatabaseConfig]
 
})
export class AppModule {}
