export interface TaskDto {
    id?: string,
    title?:string,
    description?:string,
    deliveryDate?: Date,
    completionStatus?: string,
    fedbacks?:string,
    tags?: string,
    responsible?: string

}
