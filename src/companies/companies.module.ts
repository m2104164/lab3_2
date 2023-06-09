import { Module } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CompaniesController } from './companies.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from './entities/company.entity';

@Module({
    controllers: [CompaniesController],
    providers: [CompaniesService],
    imports: [
        DatasourceModule,
        TypeOrmModule.forFeature([Company])
    ],
})
export class CompaniesModule {}
