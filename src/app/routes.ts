import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Página Inicial',
  },
  {
    path: 'details/:id',
    component: MovieDetailsComponent,
    title: 'Detalhes do filme',
  },
];

export default routeConfig;
