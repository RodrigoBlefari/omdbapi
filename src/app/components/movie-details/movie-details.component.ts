import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../movie';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template: `
    <article *ngIf="movie">
      <section>
        <img
          class="listing-photo"
          ngSrc="{{ movie.Poster }}"
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
                  {{ stars(rating.Value) }}
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
})
export class MovieDetailsComponent {
  movie: Movie | undefined;
  movieProperties: string[] = [];
  errorMessage: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {
    const imdbID = this.route.snapshot.params['imdbID'];

    this.movieService.getMovieByImdbID(imdbID).then(
      (movie) => {
        this.movie = movie;
        this.movieProperties = Object.keys(movie || {});
      },
      (error) => {
        this.errorMessage = 'Erro ao carregar os detalhes do filme.';
        console.error('Erro ao carregar detalhes do filme:', error);
      }
    );
  }

  getProperty(obj: any, key: string): any {
    return Object.getOwnPropertyDescriptor(obj, key)?.value;
  }

  stars(ratingValue: string): string {
    const ratingNumber = parseFloat(ratingValue);
    const numberOfStars = Math.round(ratingNumber / 2);
    return '⭐️'.repeat(numberOfStars);
  }
}
