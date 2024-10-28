import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Article, News } from '../../../interfaces/news-req.interface';

import { NewsService } from '../../../services';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './news.component.html',
  styles: ``,
})
export default class NewsComponent {
  public articles: Article[] = [];

  constructor(private newsService: NewsService) {
    this.getLatestNews();
  }

  getLatestNews(): void {
    this.newsService.getNews().subscribe((resp: News) => {
      this.articles = resp.articles;
    });
  }
}
