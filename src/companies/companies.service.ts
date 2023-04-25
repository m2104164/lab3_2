import { Injectable, HttpStatus } from '@nestjs/common';
import { DatasourceService } from 'src/datasource/datasource.service'
import { Company } from './entities/company.entity';

import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateCompanyDto } from './dto/CompanyDTO'
import { IncompleteCompanyDto } from './dto/incomplete-company.dto'

@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>, // "внедряем" репозиторий Company в сервис
  ) {}

  async create(companyDto: CreateCompanyDto): Promise<Company>
  {
    //получаем объект CreateCompanyDto
    const company = this.companyRepository.create(); //создаем объект Company из репозитория

    company.name = companyDto.name;
    company.address = companyDto.address;


    await this.companyRepository.save(company); //сохраняем объект Company в БД
    return company; //возвращаем объект Company
  }

  findOne(id: number): Promise<Company> {
    // Promise<Company> - указывает, что функция возвращает объект Company в виде Promise (c асинхронного потока)
    return this.companyRepository.findOne({
    //получаем объект Company по id
    where: { id }, //указываем условие поиска по id
    });
}

  async findAll(): Promise<Company[]> {
    const companies = await this.companyRepository.find({});
    return companies;
}

  async findIncomplete(): Promise<IncompleteCompanyDto[]> {
    const companies = await this.companyRepository.find(); //получаем массив Company из БД
    const incompleteCompanies: IncompleteCompanyDto[] = companies.map((company) =>
    {
      //преобразуем массив Company в массив IncompleteCompanyDto
      const incompleteCopmany = new IncompleteCompanyDto();
      incompleteCopmany.id = company.id;
      incompleteCopmany.name = company.name;
      incompleteCopmany.address = company.address;
      return incompleteCopmany;
    });
    return incompleteCompanies; //возвращаем массив IncompleteCompanyDto
}

  async update(id: number, updatedCompany: Company) {
    //получаем объект Company для обновления по id
    const company = await this.companyRepository.findOne({ where: { id } });

    company.name = updatedCompany.name;
    company.address = updatedCompany.address;

    await this.companyRepository.save(company); //сохраняем объект Company в БД
    return company; //возвращаем объект Company
}

  remove(id: number) {
    this.companyRepository.delete({ id }); //удаляем объект Company из БД
  }
}
