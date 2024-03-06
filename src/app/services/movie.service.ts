import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../movie';
import { environment } from '../../environments/environment';
import { SnackbarService } from './snackbar-service.service';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  apiKey = environment.apiKey;
  apiUrlOmdb = environment.apiUrlOmdb;
  apiUrlMovies = environment.apiUrlMovies;

  constructor(
    private snackbarService: SnackbarService,
    private router: Router
  ) {}

  async getMovieList(): Promise<Movie[]> {
    const data = await fetch(this.apiUrlMovies);
    return (await data.json()) ?? [];
  }

  async getMovieByImdbID(imdbID: string): Promise<Movie | undefined> {
    try {
      const data = await fetch(
        `${this.apiUrlOmdb}/?i=${imdbID}&apikey=${this.apiKey}`
      );

      if (data.status === 401) {
        this.snackbarService.show(
          'Acesso não Autorizado, verifique apiKey',
          '#db4a4a'
        );
        this.router.navigate(['/']);
        return undefined;
      }

      return (await data.json()) ?? undefined;
    } catch (error) {
      this.snackbarService.show('Error fetching movie details:', '#db4a4a');
      this.router.navigate(['/']);
      return undefined;
    }
  }
}
