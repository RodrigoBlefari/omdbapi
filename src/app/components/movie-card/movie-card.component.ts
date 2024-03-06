import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Movie, Rating } from '../../movie';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <img
        *ngIf="showImage"
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
          <span class="stars" *ngIf="movie.Ratings && movie.Ratings.length > 0">
            <span *ngFor="let star of stars(movie.Ratings[0]?.Value || '')">
              {{ star }}
            </span>
          </span>
        </h2>
        <p>Gênero: {{ movie.Genre }}</p>
        <h5>Audio: {{ movie.Language }}</h5>
      </article>
      <a [routerLink]="['/details', movie.imdbID]">Ver detalhes</a>
    </section>
  `,
  styleUrl: './movie-card.component.scss',
})
export class MovieCardComponent {
  @Input() movie!: Movie;
  @Input() showImage: boolean = true;

  stars(rating: string): string[] {
    if (!rating) return [];
    const numStars = Math.round(parseFloat(rating) / 2);
    return Array(numStars).fill('⭐️');
  }
}
