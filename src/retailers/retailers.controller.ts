import { RetailersService } from './retailers.service';
import { Controller, Get, Put, Post, Delete, Param, Body } from '@nestjs/common';
import { Retailer } from './entities/retailer.entity';

@Controller('retailers')
export class RetailersController {
    constructor(private readonly retailersService: RetailersService) {}

    @Get()
    findAll() {
        return this.retailersService.findAll();
    }

    @Get('incomplete')
    findIncomplete() {
        return this.retailersService.findIncomplete();
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateRetailer: Retailer) {
        return this.retailersService.update(+id, updateRetailer);
    }

    @Post()
    create(@Body() createRetailer: Retailer) {
        return this.retailersService.create(createRetailer);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.retailersService.remove(+id);
    }
}
