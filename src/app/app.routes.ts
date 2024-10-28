import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    title: 'News App',
    loadComponent: () => import('./dashboard/dashboard.component'),
    children: [
      {
        path: 'authors',
        title: 'Authors',
        loadComponent: () =>
          import('./dashboard/pages/authors/authors.component'),
      },
      {
        path: 'contact-us',
        title: 'Contact Us',
        loadComponent: () =>
          import('./dashboard/pages/contact-us/contact.component'),
      },
      {
        path: 'news',
        title: 'Latest News',
        loadComponent: () => import('./dashboard/pages/news/news.component'),
      },
      {
        path: 'weather',
        title: 'Weather',
        loadComponent: () =>
          import('./dashboard/pages/weather/weather.component'),
      },
      {
        path: '',
        redirectTo: 'news',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
];
