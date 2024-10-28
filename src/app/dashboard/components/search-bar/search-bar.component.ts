import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { SearchResultsComponent } from '../search-results/search-results.component';
import { WeatherService } from '../../../services';
import { WeatherResponse } from '../../../interfaces/weather-req.interface';

@Component({
  standalone: true,
  selector: 'app-search-bar',
  imports: [CommonModule, SearchResultsComponent],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  private debounceTimer?: NodeJS.Timeout;

  constructor(private weatherService: WeatherService) {}

  onQueryChanged(city: string = '') {
    if (this.debounceTimer) clearTimeout(this.debounceTimer);

    this.debounceTimer = setTimeout(() => {
      this.weatherService.getPlacesByQuery(city);
    }, 1000);
  }

  get weatherData(): WeatherResponse | null {
    return this.weatherService.weatherData;
  }
}
