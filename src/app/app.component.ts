import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { SnackbarService } from './services/snackbar-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, RouterModule],
  template: `
    <main>
      <header class="brand-name">
        <img
          src="assets/logo-imdb.png"
          width="100"
          height="50"
          alt="Logo Imdb"
          class="brand-logo"
          [routerLink]="['/']"
        />
      </header>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'omdbapi';
  snackbarService: SnackbarService;

  constructor() {
    this.snackbarService = new SnackbarService();
  }
}
