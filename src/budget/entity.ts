import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { BaseEntity } from 'typeorm/repository/BaseEntity';
// import { IsString } from 'class-validator';

@Entity()
export default class Budget extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column('text', { nullable: true })
  month: string;

  @Column('text', { nullable: true })
  totalBought: string;

  @Column('text', { nullable: true })
  totalUsed: string;

  @Column('text', { nullable: true })
  totalBoughtMeals: string;

  @Column('text', { nullable: true })
  totalUsedMeals: string;

  @Column('text', { nullable: true })
  totalBoughtCategories: string;

  @Column('text', { nullable: true })
  totalUsedCategories: string;
}
