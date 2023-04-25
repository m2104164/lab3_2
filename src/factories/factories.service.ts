import { Injectable, HttpStatus } from '@nestjs/common';
import { DatasourceService } from 'src/datasource/datasource.service'
import { Factory } from './entities/factory.entity';

import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateFactoryDto } from './dto/FactoryDTO'
import { IncompleteFactoryDto } from './dto/incomplete-factory.dto'

@Injectable()
export class FactoriesService {
  constructor(
    @InjectRepository(Factory)
    private readonly factoryRepository: Repository<Factory>,
  ) {}

  async create(factoryDto: CreateFactoryDto): Promise<Factory>
  {
    const factory = this.factoryRepository.create();

    factory.full = factoryDto.full;
    factory.address = factoryDto.address;
    factory.contact = factoryDto.contact;

    await this.factoryRepository.save(factory);
    return factory;
  }

  findOne(id: number): Promise<Factory> {
    return this.factoryRepository.findOne({
    where: { id },
    });
}

  async findAll(): Promise<Factory[]> {
    const factories = await this.factoryRepository.find({
    });
    return factories;
}

  async findIncomplete(): Promise<IncompleteFactoryDto[]> {
    const factories = await this.factoryRepository.find();
    const incompleteFactories: IncompleteFactoryDto[] = factories.map((factory) =>
    {
      const incompleteFactory = new IncompleteFactoryDto();
      incompleteFactory.id = factory.id;
      incompleteFactory.full = factory.full;
      incompleteFactory.address = factory.address;
      incompleteFactory.contact = factory.contact;
      return incompleteFactory;
    });
    return incompleteFactories;
}

  async update(id: number, updatedFactory: Factory) {
    const factory = await this.factoryRepository.findOne({ where: { id } });

    factory.full = updatedFactory.full;
    factory.address = updatedFactory.address;
    factory.contact = updatedFactory.contact;

    await this.factoryRepository.save(factory);
    return factory;
}

  remove(id: number) {
    this.factoryRepository.delete({ id });
  }
}
