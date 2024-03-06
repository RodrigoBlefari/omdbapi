import { Component, OnInit, inject } from '@angular/core';
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
      <section class="form-filter">
        <input
          type="text"
          (input)="filterResults(filter.value)"
          placeholder="Filtro por título"
          #filter
        />
        <button
          [ngClass]="showImage ? 'round' : ' square'"
          type="button"
          (click)="toggleSimpleView()"
        >
          {{ showImage ? '[ ]' : '|||' }}
        </button>
      </section>
    </section>
    <section class="results">
      <app-movie-card
        *ngFor="let movie of filteredMovieList"
        [movie]="movie"
        [showImage]="showImage"
      ></app-movie-card>
    </section>
  `,
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  filteredMovieList!: Movie[];
  movieList: Movie[] = [];
  showImage: boolean = true;
  movieService: MovieService = inject(MovieService);

  constructor() {}

  ngOnInit() {
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

  toggleSimpleView() {
    this.showImage = !this.showImage;
    this.filterResults('');
  }
}
