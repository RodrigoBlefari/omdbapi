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
        <input type="text" placeholder="Filtro por título" #filter />
        <button type="primary" (click)="filterResults(filter.value)">
          Buscar
        </button>
      </form>
    </section>
    <section class="results">
      <app-movie-card
        *ngFor="let movie of filteredMovieList"
        [movie]="movie"
      ></app-movie-card>
    </section>
  `,
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  filteredMovieList!: Movie[];
  movieList: Movie[] = [];
  movieService: MovieService = inject(MovieService);

  constructor() {
    this.movieService.getMovieList().then((movieList) => {
      this.movieList = movieList;
      this.filteredMovieList = movieList;
    });
  }

  filterResults(filter: string) {
    this.filteredMovieList = this.movieList.filter((movie) =>
      movie?.Title.toLowerCase().includes(filter.toLowerCase())
    );
  }
}
