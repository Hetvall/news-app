import { computed, inject, Injectable, signal } from '@angular/core';
import { Authors, AuthorsResponse } from '../interfaces/authors-req.interface';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs';

interface State {
  author: Authors[];
  loading: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthorsService {
  private http = inject(HttpClient);

  #state = signal<State>({
    loading: true,
    author: [],
  });

  public authors = computed(() => this.#state().author);
  public loading = computed(() => this.#state().loading);

  constructor() {
    this.http
      .get<AuthorsResponse>('https://reqres.in/api/users')
      .pipe(delay(1500))
      .subscribe((resp) =>
        this.#state.set({
          loading: false,
          author: resp.data,
        })
      );
  }
}
