import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TaskEntity } from "src/core/domain/entities";
import { TaskMapper } from "src/core/domain/mappers/task/task-mapper";
import { TaskDto } from "src/shared/dtos/task";
import { Repository } from "typeorm";

@Injectable()
export class TaskUserCases {
    private readonly mapper: TaskMapper;
    constructor(
        @InjectRepository(TaskEntity) private taskRepository: Repository<TaskEntity>){
        this.mapper = new TaskMapper(); 

    }
    async findAll(): Promise<TaskDto[]>{
        const tasks = await this.taskRepository.find();
        if(tasks.length == 0){
            return tasks;
        }
        return tasks.map((taskMap) => this.mapper.toDto(taskMap))
    }
    async findOne(id: string): Promise<TaskDto | null>{
        const task = await this.taskRepository.findOneBy({id});
        return task ?? this.mapper.toDto(task);
        
    }
    async create(taskDto: TaskDto): Promise<void>{
        await this.taskRepository.insert(this.mapper.toEntity(taskDto))
    }
    async update(taskDto: TaskDto): Promise<void>{
        await this.taskRepository.update({id: taskDto.id},{...taskDto});

    }
    async delete(id: string): Promise<void>{
        await this.taskRepository.delete(id)
    }
}
