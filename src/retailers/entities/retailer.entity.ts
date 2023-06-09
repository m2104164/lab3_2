import { ApiProperty } from '@nestjs/swagger';
// https://docs.nestjs.com/openapi/types-and-parameters
// ApiProperty чтобы SwaggerModule мог видеть поля класса

import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('retailers') //указываем что это не просто клаcс, а сущность в рамках TypeOrm, в БД будет храниться как таблица
export class Retailer {
  @ApiProperty()
  @PrimaryGeneratedColumn() //колонка - идентификатор, значение генерируется автоматически
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  address: string;

  @ApiProperty()
  @Column()
  contact: string;
}
