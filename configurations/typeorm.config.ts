import { DataSource } from 'typeorm';

const ormConfig: DataSource = new DataSource({
    type: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    database: 'education',
    username: 'education',
    password: 'password',
    entities: ['dist/**/*.entity{.ts,.js}'],
    logging: true,
    synchronize: false,
    migrationsTableName: 'migrations',
    migrations: ['dist/src/migrations/*{.ts,.js}'],
});
export default ormConfig;
