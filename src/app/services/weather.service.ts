import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { WeatherResponse } from '../interfaces/weather-req.interface';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  public weatherData: WeatherResponse | null = null;
  public isLoadingLocation: boolean = false;
  public showWeatherInfo: boolean = false;

  constructor(private http: HttpClient) {}

  private apiUrl = `http://api.weatherapi.com/v1/current.json?key=${environment.weather_key}&q={{city}}&aqi=no
  `;

  getPlacesByQuery(city: string = '') {
    if (city.length === 0) {
      this.isLoadingLocation = false;
      this.weatherData = null;
      this.showWeatherInfo = false;
      return;
    }

    if (this.weatherData && this.weatherData.location.name === city) {
      return;
    }

    const url = this.apiUrl.replace('{{city}}', city);
    this.isLoadingLocation = true;
    this.showWeatherInfo = false;

    this.http.get<WeatherResponse>(url).subscribe({
      next: (resp) => {
        this.isLoadingLocation = false;
        this.weatherData = resp;
      },
      error: (err) => {
        this.isLoadingLocation = false;
        alert('We are sorry, city not found');
      },
    });
  }
}
