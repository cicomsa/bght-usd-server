import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export default class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column('text', { nullable: true })
  name: string;

  @Column('text', { nullable: true })
  price: string;

  @Column('text', { nullable: true })
  bought: string;

  @Column('text', { nullable: true })
  started: string;

  @Column('text', { nullable: true })
  finished: string;

  @Column('text', { nullable: true })
  renewed: string;

  @Column('int', { nullable: true, default: 0 })
  usage: number;

  @Column('int', { nullable: true, default: 100 })
  left: number;

  @Column('int', { nullable: true })
  categoryNo: number;

  @Column('text', { nullable: true })
  category: string;

  @Column('int', { nullable: true })
  mealNo: number;

  @Column('text', { nullable: true })
  meal: string;

  @Column('text', { nullable: true })
  basics: string;

  @Column('int', { nullable: true })
  totalUsage: number;

  @Column('text', { nullable: true })
  usagePrice: string;
}
