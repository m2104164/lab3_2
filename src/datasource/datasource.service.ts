import { Injectable } from '@nestjs/common';
import { Factory } from 'src/factories/entities/factory.entity';
import { Company } from 'src/companies/entities/company.entity';
import { Retailer } from 'src/retailers/entities/retailer.entity';

@Injectable()
export class DatasourceService {
    private factories: Factory[] = [];
    private companies: Company[] = [];
    private retailers: Retailer[] = [];

    getFactories(): Factory[] {
        return this.factories;
    }

    getCompanies(): Company[] {
        return this.companies;
    }

    getRetailers(): Retailer[] {
        return this.retailers;
    }
}
