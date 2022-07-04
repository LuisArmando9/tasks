import { Injectable } from "@nestjs/common";
import { Constants } from "src/infrestructure/helpers/constants";
import { TaskDto } from "src/shared/dtos/task";
import { IMapper } from "../../base";
import { TaskEntity } from "../../entities";


export class TaskMapper implements IMapper<TaskEntity, TaskDto>{
    toEntity(dto: TaskDto): TaskEntity {
        const entity: TaskEntity = new TaskEntity();
        entity.completionStatus = dto.completionStatus;
        entity.deliveryDate = dto.deliveryDate;
        entity.description = dto.description;
        entity.responsible = dto.responsible;
        entity.fedbacks = JSON.stringify(dto.fedbacks);
        entity.tags = JSON.stringify(dto.tags);
        entity.title = dto.title;
        return entity;
        
    }
    toDto(entity: TaskEntity): TaskDto {
        return {
            id: entity.id,
            title: entity.title,
            description: entity.description,
            completionStatus: entity.completionStatus,
            deliveryDate: entity.deliveryDate,
            tags: entity.tags ?? Constants.EMPTY_STRING,
            fedbacks: entity.fedbacks ?? Constants.EMPTY_STRING,
            responsible: entity.responsible ?? Constants.EMPTY_STRING

        }
        
    }
    
}
