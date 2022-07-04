import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { type } from 'os';
import { TaskEntity } from 'src/core/domain/entities';

@Module({
    imports:[TypeOrmModule.forFeature([TaskEntity])],
    exports:[TypeOrmModule]
})
export class TaskModuleUsercases {}

