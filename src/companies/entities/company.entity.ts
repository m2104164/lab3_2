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

@Entity('companies') //указываем что это не просто клаcс, а сущность в рамках TypeOrm, в БД будет храниться как таблица
export class Company {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn() //колонка - идентификатор, значение генерируется автоматически
  id: number;

  @ApiProperty({ example: 'IKEA', description: 'Название компании' })
  @Column()
  name: string;

  @ApiProperty({ example: 'г. Москва', description: 'Адресс компании' })
  @Column()
  address: string;
}
