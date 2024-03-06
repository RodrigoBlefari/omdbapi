import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>movie-details works!</p> `,
  styleUrl: './movie-details.component.scss',
})
export class MovieDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  imdbID: string;

  constructor() {
    this.imdbID = this.route.snapshot.params['id'];
    console.log('imdbID: ' + this.imdbID);
  }
}
