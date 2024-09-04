import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { WeatherModule } from './weather/weather.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes the config available globally
    }),
    // HttpModule, // Import HttpModule
    WeatherModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
