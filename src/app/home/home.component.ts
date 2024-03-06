import { Component } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MovieCardComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filtro por título" />
        <button type="primary">Buscar</button>
      </form>
    </section>
    <section class="results">
      <app-movie-card></app-movie-card>
    </section>
  `,
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
