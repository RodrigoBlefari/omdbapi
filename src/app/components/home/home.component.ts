import { Component, inject } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { Movie } from '../../movie';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MovieCardComponent, CommonModule],
  template: `
    <section>
      <form class="form-filter">
        <input type="text" placeholder="Filtro por título" />
        <button type="primary">Buscar</button>
      </form>
    </section>
    <section class="results">
      <app-movie-card
        *ngFor="let movie of movieList"
        [movie]="movie"
      ></app-movie-card>
    </section>
  `,
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  movieList: Movie[] = [];
  movieService: MovieService = inject(MovieService);

  constructor() {
    this.movieList = this.movieService.getMovieList();
  }
}
