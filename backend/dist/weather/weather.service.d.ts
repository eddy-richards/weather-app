import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
export declare class WeatherService {
    private readonly httpService;
    private readonly configService;
    private readonly apiKey;
    private readonly baseUrl;
    constructor(httpService: HttpService, configService: ConfigService);
    getWeather(city: string): Promise<any>;
}
