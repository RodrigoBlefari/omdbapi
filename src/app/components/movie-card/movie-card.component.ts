import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Movie } from '../../movie';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template: `
    <section class="listing">
      <img
        ngSrc="{{ movie.Poster }}"
        alt="Imagem do filme {{ movie.Title }}"
        class="listing-photo"
      />
      <h2 class="listing-heading">{{ movie.Title }}</h2>
      <p class="listing-movie">{{ movie.Language }}</p>
      <p class="listing-movie">{{ movie.Genre }}</p>
    </section>
  `,
  styleUrl: './movie-card.component.scss',
})
export class MovieCardComponent {
  @Input() movie!: Movie;
}
