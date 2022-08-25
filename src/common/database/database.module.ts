import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST')|| 'localhost',
        port:configService.get('POSTGRES_PORT')||  5434,
        username: configService.get('POSTGRES_USER')|| 'postgres',
        password: configService.get('POSTGRES_PASSWORD')|| 'postgres',
        database: configService.get('POSTGRES_DB')|| 'example-db',
        entities: [
          __dirname + '/../../**/*.entity.ts',
          __dirname + '/../../**/*.entity.js',
        ],
        synchronize: false,
        migrationsTableName: 'migrations',
        logging: ['error', 'info'],
        namingStrategy: new SnakeNamingStrategy(),
      }),
    }),
  ],
})
export class DatabaseModule {}
