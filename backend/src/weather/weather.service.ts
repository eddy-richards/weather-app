import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class WeatherService {
  private readonly apiKey: string;
  private readonly baseUrl: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.apiKey = this.configService.get<string>('WEATHER_API_KEY');
    this.baseUrl = 'http://api.openweathermap.org/data/2.5';
  }

  async getWeather(city: string): Promise<any> {
    const url = `${this.baseUrl}/weather?q=${city}&appid=${this.apiKey}&units=metric`;
    console.log(url)

    // Use lastValueFrom to convert Observable to Promise
    const response = await lastValueFrom(this.httpService.get(url));
    return response.data;
  }
}
