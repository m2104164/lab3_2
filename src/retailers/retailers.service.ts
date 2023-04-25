import { Injectable, HttpStatus } from '@nestjs/common';
import { DatasourceService } from 'src/datasource/datasource.service'
import { Retailer } from './entities/retailer.entity';

import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateRetailerDto } from './dto/RetailerDTO'
import { IncompleteRetailerDto } from './dto/incomplete-retailer.dto'

@Injectable()
export class RetailersService {
  constructor(
    @InjectRepository(Retailer)
    private readonly retailerRepository: Repository<Retailer>,
  ) {}
  async create(retailerDto: CreateRetailerDto): Promise<Retailer>
  {
    const retailer = this.retailerRepository.create();

    retailer.name = retailerDto.name;
    retailer.address = retailerDto.address;
    retailer.contact = retailerDto.contact;


    await this.retailerRepository.save(retailer);
    return retailer;
  }

  findOne(id: number): Promise<Retailer> {
    return this.retailerRepository.findOne({
    where: { id },
    });
}

  async findAll(): Promise<Retailer[]> {
    const retailers = await this.retailerRepository.find({
    });
    return retailers;
}

  async findIncomplete(): Promise<IncompleteRetailerDto[]> {
    const retailers = await this.retailerRepository.find();
    const incompleteRetailers: IncompleteRetailerDto[] = retailers.map((retailer) =>
    {
      const incompleteRetailer = new IncompleteRetailerDto();
      incompleteRetailer.id = retailer.id;
      incompleteRetailer.name = retailer.name;
      incompleteRetailer.address = retailer.address;
      incompleteRetailer.contact = retailer.contact;
      return incompleteRetailer;
    });
    return incompleteRetailers;
}

  async update(id: number, updatedRetailer: Retailer) {
    const retailer = await this.retailerRepository.findOne({ where: { id } });

    retailer.name = updatedRetailer.name;
    retailer.address = updatedRetailer.address;
    retailer.contact = updatedRetailer.contact;

    await this.retailerRepository.save(retailer);
    return retailer;
}

  remove(id: number) {
    this.retailerRepository.delete({ id });
  }
}
