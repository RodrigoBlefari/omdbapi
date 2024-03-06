import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Movie } from '../../movie';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterModule],
  template: `
    <section class="listing">
      <img
        [ngSrc]="movie.Poster"
        alt="Imagem do filme {{ movie.Title }}"
        class="listing-photo"
        priority
        width="100"
        height="100"
      />
      <article class="listing-infos">
        <h2 class="listing-heading">{{ movie.Title }}</h2>
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
}
