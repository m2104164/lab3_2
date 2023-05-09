import { ApiProperty } from '@nestjs/swagger';

export class CreateCompanyDto {
  @ApiProperty({ example: 'IKEA', description: 'Название компании' })
  name: string;

  @ApiProperty({ example: 'г. Москва', description: 'Адресс компании' })
  address: string;
}
