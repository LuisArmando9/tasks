import { Body, Controller, Delete, Get, Param, Post, Put, Session } from '@nestjs/common';
import session from 'express-session';
import { TaskDto } from 'src/shared/dtos/task';
import { TaskUserCases } from 'src/usecases/task/task-user-cases';
import {
    ApiBearerAuth,
    ApiOkResponse,
    ApiOperation,
    ApiResponse,
    ApiTags,
  } from '@nestjs/swagger';
import { TaskEntity } from 'src/core/domain/entities';
@Controller('task')
export class TaskController {
    constructor(private readonly taskUserCases: TaskUserCases){}

    @ApiOperation({ summary: 'Create task' })
    @ApiResponse({ status: 500, description: 'Servel internal error.' })
    @ApiOkResponse()
    @Post("/create")
    async create(@Body() taskDto: TaskDto){
        await this.taskUserCases.create(taskDto);
    }

    @ApiOperation({ summary: 'Get task' })
    @ApiResponse({ status: 200, description: 'success.', type:TaskEntity})
    @ApiOkResponse()
    @Get(":id")
    async findOne(@Param() params) {
        return await this.taskUserCases.findOne(params.id);
    }


    @ApiOperation({ summary: 'Get  array tasks' })
    @ApiResponse({ status: 200, description: 'success.', type:Array<TaskEntity> })
    @Get("/find/all")
    async findAll(){
        return await this.taskUserCases.findAll();
    }

    @ApiOperation({ summary: 'Delete any task by id' })
    @ApiResponse({ status: 200, description: 'success.' })
    @Delete(":id")
    async delete(@Param() params){
        await this.taskUserCases.delete(params.id);
    }

    @ApiOperation({ summary: 'Update task' })
    @ApiResponse({ status: 200, description: 'success.' })
    @Put("/update")
    async update(@Body() taskDto: TaskDto){
        await this.taskUserCases.update(taskDto);
    }
}
