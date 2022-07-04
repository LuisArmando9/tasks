import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TaskDto } from 'src/shared/dtos/task';
import { TaskUserCases } from 'src/usecases/task/task-user-cases';

@Controller('task')
export class TaskController {
    constructor(private readonly taskUserCases: TaskUserCases){}
    @Post("/create")
    async create(@Body() taskDto: TaskDto){
        await this.taskUserCases.create(taskDto);
    }
    @Get(":id")
    async findOne(@Param() params) {
        return await this.taskUserCases.findOne(params.id);
    }
    @Get("/all")
    async findAll(){
        return await this.taskUserCases.findAll();
    }

    @Delete(":id")
    async delete(@Param() params){
        await this.taskUserCases.delete(params.id);
    }
    @Put("/update")
    async update(@Body() taskDto: TaskDto){
        await this.taskUserCases.update(taskDto);
    }
}
