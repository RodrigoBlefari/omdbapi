import { Component, Input } from '@angular/core';
import { Movie } from '../../movie';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StarsPipe } from '../../pipes/stars-pipe.pipe';
@Component({
  selector: 'app-movie-card',
  standalone: true,
  template: `
    <section class="listing">
      <img
        *ngIf="showImage && movie?.Poster"
        [src]="movie.Poster"
        alt="Imagem do filme {{ movie.Title }}"
        class="listing-photo"
        width="100"
        height="100"
      />
      <article class="listing-infos">
        <h2 class="listing-heading">
          {{ movie.Title }}
          <br />
          <span
            class="stars"
            *ngIf="movie?.Ratings && movie.Ratings.length > 0"
          >
            {{ movie.Ratings[0].Value | stars }}
          </span>
        </h2>
        <p>Gênero: {{ movie.Genre }}</p>
        <h5>Audio: {{ movie.Language }}</h5>
      </article>
      <a *ngIf="movie?.imdbID" [routerLink]="['/details', movie.imdbID]"
        >Ver detalhes</a
      >
    </section>
  `,
  styleUrl: './movie-card.component.scss',
  imports: [CommonModule, RouterModule, StarsPipe],
})
export class MovieCardComponent {
  @Input() movie!: Movie;
  @Input() showImage: boolean = true;
}
