import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { News } from '../interfaces/news-req.interface';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class NewsService {
  private apiUrl = `https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=${environment.news_key}`;

  constructor(private http: HttpClient) {}

  getNews(): Observable<News> {
    return this.http.get<News>(this.apiUrl);
  }
}
