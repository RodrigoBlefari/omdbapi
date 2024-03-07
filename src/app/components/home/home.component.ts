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
          id="filter"
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
      <h2 *ngIf="filterResults.length === 0">
        Nenhum filme encontrado com título ' {{ filter.value }} '
      </h2>
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

//describe de check html, Chegar se input esta com id filter, testar se botão esta clicavel
//describe Should Filter form. testar o filtro da seguinte forma:
//Criar mock de uma lista de Movie[] com base nos passados anteriormente,
//depois de adicionar o valor do primeiro movie[0] title apenas as 3 primeiras letras
// verificar se função filterresults foi chamada com esse valor
//e verificar se o valor o valor inserido no filter contain dentro do title dos que estão no filteredMovieList
