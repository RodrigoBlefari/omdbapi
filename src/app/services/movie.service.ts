import { Injectable } from '@angular/core';
import { Movie } from '../movie';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  apiKey = environment.apiKey;
  apiUrlMovies = environment.apiUrlMovies;
  apiUrlOmdb = environment.apiUrlOmdb;
  constructor() {}

  async getMovieList(): Promise<Movie[]> {
    const data = await fetch(this.apiUrlMovies);
    return (await data.json()) ?? [];
  }

  async getMovieByImdbID(imdbID: string): Promise<Movie | undefined> {
    const data = await fetch(
      `${this.apiUrlOmdb}/?i=${imdbID}&apikey=${this.apiKey}`
    );
    return (await data.json()) ?? undefined;
  }
}
