import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { SearchBarComponent } from '../../components/search-bar/search-bar.component';

@Component({
  standalone: true,
  imports: [CommonModule, SearchBarComponent],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css',
})
export default class WeatherComponent {}
