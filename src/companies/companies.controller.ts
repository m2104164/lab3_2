import { CompaniesService } from './companies.service';
import { Controller, Get, Put, Post, Delete, Param, Body } from '@nestjs/common';
import { Company } from './entities/company.entity';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@Controller('companies')
@ApiTags('Компании')
export class CompaniesController {
    constructor(private readonly companiesService: CompaniesService) {}

    @Get()
    findAll() {
        return this.companiesService.findAll();
    }

    @Get('incomplete')
    findIncomplete() {
        return this.companiesService.findIncomplete();
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateCompany: Company) {
        return this.companiesService.update(+id, updateCompany);
    }

    @ApiOperation({ summary: 'Создание компании' })
    @Post()
    create(@Body() createCompany: Company) {
        return this.companiesService.create(createCompany);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.companiesService.remove(+id);
    }
}
