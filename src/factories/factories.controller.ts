import { FactoriesService } from './factories.service';
import { Controller, Get, Put, Post, Delete, Param, Body } from '@nestjs/common';
import { Factory } from './entities/factory.entity';

@Controller('factories')
export class FactoriesController {
    constructor(private readonly factoriesService: FactoriesService) {}

    @Get()
    findAll() {
        return this.factoriesService.findAll();
    }

    @Get('incomplete')
    findIncomplete() {
        return this.factoriesService.findIncomplete();
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateFactory: Factory) {
        return this.factoriesService.update(+id, updateFactory);
    }

    @Post()
    create(@Body() createFactory: Factory) {
        return this.factoriesService.create(createFactory);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.factoriesService.remove(+id);
    }
}
