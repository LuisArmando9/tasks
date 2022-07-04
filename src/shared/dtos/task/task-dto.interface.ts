export interface TaskDto {
    id: string,
    title:string,
    description:string,
    deliveryDate: Date,
    completionStatus: string,
    fedbacks?:Array<string>,
    tags?: Array<string>,
    responsible?: string

}
