import { DataSource } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
console.log('------------------------', __dirname);
const datasource = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: parseInt(process.env.POSTGRES_PORT as string) || 5434,
  database: process.env.POSTGRES_DB || 'example-db',
  username: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'postgres',
  entities: [
    __dirname + '/../../**/*.entity.ts',
    __dirname + '/../../**/*.entity.js',
  ],
  synchronize: false,
  migrationsTableName: 'migrations',
  namingStrategy: new SnakeNamingStrategy(),
  migrations: [`${__dirname}/../migrations/*{.ts,.js}`],
   
});
export default datasource;
