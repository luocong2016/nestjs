import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { CatsModule } from './cats/cats.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      async useFactory(configService: ConfigService) {
        return {
          uri: configService.get('MONGODB'),
        };
      },
    }),
    CatsModule,
  ],
})
export class AppModule {}
