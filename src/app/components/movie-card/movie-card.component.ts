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
        width="100"
        height="100"
      />
      <article class="listing-infos">
        <h2 class="listing-heading">{{ movie.Title }}</h2>
        <p>Gênero: {{ movie.Genre }}</p>
        <h5>Audio: {{ movie.Language }}</h5>
      </article>
    </section>
  `,
  styleUrl: './movie-card.component.scss',
})
export class MovieCardComponent {
  @Input() movie!: Movie;
  constructor() {
    console.log('aki', this.movie);
  }
}
