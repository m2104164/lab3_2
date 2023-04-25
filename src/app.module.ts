import { Module } from '@nestjs/common';
import { CompaniesModule } from './companies/companies.module';
import { FactoriesModule } from './factories/factories.module';
import { RetailersModule } from './retailers/retailers.module';

import { DatasourceModule } from './datasource/datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [CompaniesModule, FactoriesModule, RetailersModule, DatasourceModule,
              TypeOrmModule.forRoot({
                    type: 'postgres', //тип подключаемой БД
                    port: 5432, //порт
                    username: 'education', //имя пользователя
                    password: 'password', //пароль
                    host: '127.0.0.1', //хост, в нашем случае БД развернута локально
                    synchronize: false, //отключаем автосинхронизацию(в противном случае при каждом перезапуске наша БД будет создаваться заново)
                    logging: 'all', //включим логирование для удобства отслеживания процессов
                    entities: ['dist/**/*.entity{.ts,.js}'], //указываем путь к сущностям
                    })],
    controllers: [],
    providers: [],
})
export class AppModule {}
