import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class TaskEntity {
  @PrimaryColumn()
  id: string

  @Column()
  title: string

  @Column()
  responsible: string

  @Column()
  tags: string

  @Column()
  fedbacks: string

  @Column()
  deliveryDate: Date

  @Column()
  description: string

  @Column()
  completionStatus: string
}
