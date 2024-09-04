import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { WeatherService } from './weather.service';
import { WeatherController } from './weather.controller';

@Module({
  imports: [HttpModule], // Import HttpModule here
  providers: [WeatherService],
  controllers: [WeatherController]
})
export class WeatherModule {}
