import { Module } from '@nestjs/common';
import { RetailersService } from './retailers.service';
import { RetailersController } from './retailers.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Retailer } from './entities/retailer.entity';

@Module({
    controllers: [RetailersController],
    providers: [RetailersService],
    imports: [
        DatasourceModule,
        TypeOrmModule.forFeature([Retailer])
    ],
})
export class RetailersModule {}
