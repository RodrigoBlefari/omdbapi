import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    title: 'Página Inicial',
  },
  {
    path: 'details/:imdbID',
    component: MovieDetailsComponent,
    title: 'Detalhes do filme',
  },
  {
    path: '**', // Rota curinga para capturar rotas não encontradas
    redirectTo: '', // Redireciona para a página inicial caso a rota não seja encontrada
  },
];

export default routeConfig;
