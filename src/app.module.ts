import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QManagerModule } from './q-manager/q-manager.module';
import { QLangModule } from './q-lang/q-lang.module';
import { SettingsController } from './settings/settings.controller';
import { SettingsModule } from './settings/settings.module';
import config from './config';
@Module({
  imports: [
    QManagerModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'qtrip',
      autoLoadEntities: true,
      synchronize: true,
      entities: [__dirname + '/../**/*.entity.js'],
    }),
    QLangModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
      envFilePath: `config/.env.stage.${process.env.STAGE}`,
    }),
    SettingsModule,
  ],
  controllers: [AppController, SettingsController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
