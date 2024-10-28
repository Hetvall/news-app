import { WeatherResponse } from './../../../interfaces/weather-req.interface';
import { Component } from '@angular/core';
import { LoadingComponent } from '../loading/loading.component';
import { CommonModule } from '@angular/common';
import { WeatherService } from '../../../services';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [LoadingComponent, CommonModule],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css',
})
export class SearchResultsComponent {
  constructor(private weatherService: WeatherService) {}

  get isLoadingLocation(): boolean {
    return this.weatherService.isLoadingLocation;
  }

  get weatherData(): WeatherResponse | null {
    return this.weatherService.weatherData;
  }

  get showWeatherInfo() {
    return this.weatherService.showWeatherInfo;
  }

  toggleWeatherInfo() {
    this.weatherService.showWeatherInfo = !this.weatherService.showWeatherInfo;
  }

  clearSearch() {
    this.weatherService.weatherData = null;
    this.weatherService.showWeatherInfo = false;
  }
}
