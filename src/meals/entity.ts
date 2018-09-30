import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { BaseEntity } from 'typeorm/repository/BaseEntity';

@Entity()
export default class Meal extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column('text', { nullable: true })
  name: string;

  @Column('text', { nullable: true })
  price: string;
}
