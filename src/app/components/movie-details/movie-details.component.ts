import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../movie';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { StarsPipe } from '../../pipes/stars-pipe.pipe';
import { SnackbarService } from '../../services/snackbar-service.service';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  template: `
    <article *ngIf="movie">
      <section>
        <img
          class="listing-photo"
          ngSrc="{{ movie.Poster }}"
          alt="Foto do filme {{ movie.Title }}"
          width="100"
          priority
          height="100"
        />
      </section>
      <section class="listing-description">
        <h2 class="listing-heading">{{ movie.Title }}</h2>
        <p class="listing-movie">{{ movie.Plot }}</p>
      </section>
      <h2 class="section-heading">Detalhes do Filme</h2>
      <section class="listing-features">
        <ul>
          <ng-container *ngFor="let property of movieProperties">
            <li *ngIf="property !== 'Ratings' && property !== 'Poster'">
              <b>{{ property }}:</b> {{ getProperty(movie, property) || 'N/A' }}
            </li>
            <li *ngIf="property === 'Ratings'">
              <b>{{ property }}:</b>
              <ng-container *ngFor="let rating of movie[property]">
                {{ rating.Source }}: {{ rating.Value }}
                <span *ngIf="rating.Source === 'Internet Movie Database'">
                  {{ rating.Value | stars }}
                </span>
              </ng-container>
            </li>
          </ng-container>
        </ul>
      </section>
    </article>
    <div *ngIf="errorMessage" class="error-message">
      {{ errorMessage }}
    </div>
  `,
  styleUrl: './movie-details.component.scss',
  imports: [CommonModule, NgOptimizedImage, StarsPipe],
})
export class MovieDetailsComponent {
  movie: Movie | undefined;
  movieProperties: string[] = [];
  errorMessage: string | undefined;
  route: ActivatedRoute = inject(ActivatedRoute);
  movieService: MovieService = inject(MovieService);
  snackbarService: SnackbarService = inject(SnackbarService);

  constructor() {
    const imdbID = this.route.snapshot.params['imdbID'];

    this.movieService.getMovieByImdbID(imdbID).then(
      (movie) => {
        this.movie = movie;
        this.movieProperties = Object.keys(movie || {});
      },
      (error) => {
        this.snackbarService.show(
          `Acesso não Autorizado, verifique apiKey${error.message}`,
          '#db4a4a'
        );
      }
    );
  }

  getProperty(obj: Movie, key: string): string {
    return Object.getOwnPropertyDescriptor(obj, key)?.value;
  }
}
