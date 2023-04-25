import { Module } from '@nestjs/common';
import { FactoriesService } from './factories.service';
import { FactoriesController } from './factories.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Factory } from './entities/factory.entity';

@Module({
    controllers: [FactoriesController],
    providers: [FactoriesService],
    imports: [
        DatasourceModule,
        TypeOrmModule.forFeature([Factory])
    ],
})
export class FactoriesModule {}
