import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage, HomeComponent],
  template: `
    <main>
      <header class="brand-name">
        <img
          ngSrc="assets/logo-imdb.png"
          width="100"
          height="50"
          priority
          alt=""
          class="brand-logo"
        />
      </header>
      <section class="content">
        <app-home></app-home>
      </section>
    </main>
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'omdbapi';
}
