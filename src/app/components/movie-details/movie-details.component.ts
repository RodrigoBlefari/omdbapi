import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../movie';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template: `
    <article>
      <section>
        <img
          class="listing-photo"
          src="{{ movie?.Poster }}"
          width="100"
          height="100"
        />
      </section>
      <section class="listing-description">
        <h2 class="listing-heading">{{ movie?.Title }}</h2>
        <p class="listing-movie">{{ movie?.Plot }}</p>
      </section>
      <h2 class="section-heading">Detalhes do Filme</h2>
      <section class="listing-features">
        <ul>
          <li>
            <b>Languages:</b>

            {{ movie?.Language }}
          </li>
          <li>
            <b>Genres:</b>

            {{ movie?.Genre }}
          </li>
          <li>
            <b>Plot:</b>

            {{ movie?.Plot }}
          </li>
        </ul>
      </section>
    </article>
  `,
  styleUrl: './movie-details.component.scss',
})
export class MovieDetailsComponent {
  movie!: Movie | undefined;
  route: ActivatedRoute = inject(ActivatedRoute);
  movieServcie: MovieService = inject(MovieService);

  constructor() {
    const imdbID = this.route.snapshot.params['imdbID'];

    this.movieServcie.getMovieByImdbID(imdbID).then((movie) => {
      this.movie = movie;
    });
  }
}
