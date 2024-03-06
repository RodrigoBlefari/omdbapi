import { Component } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { Movie } from '../../movie';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MovieCardComponent, CommonModule],
  template: `
    <section>
      <form class="form-filter">
        <input type="text" placeholder="Filtro por título" />
        <button type="primary">Buscar</button>
      </form>
    </section>
    <section class="results">
      <app-movie-card
        *ngFor="let movie of movieList"
        [movie]="movie"
      ></app-movie-card>
    </section>
  `,
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  movieList: Movie[] = [
    {
      Title: 'War',
      Year: '2007',
      Rated: 'R',
      Released: '24 Aug 2007',
      Runtime: '103 min',
      Genre: 'Action, Crime, Thriller',
      Director: 'Philip G. Atwell',
      Writer: 'Lee Anthony Smith, Gregory J. Bradley',
      Actors: 'Jet Li, Jason Statham, Nadine Velazquez',
      Plot: 'An FBI Agent seeks vengeance on a mysterious assassin known as "Rogue" who murdered his partner.',
      Language: 'English, Mandarin, Japanese, Cantonese',
      Country: 'Canada, United States',
      Awards: '1 nomination',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNTIwMjE2Mjc1MF5BMl5BanBnXkFtZTYwNzI0OTI3._V1_SX300.jpg',
      Ratings: [
        {
          Source: 'Internet Movie Database',
          Value: '6.2/10',
        },
        {
          Source: 'Metacritic',
          Value: '36/100',
        },
      ],
      Metascore: '36',
      imdbRating: '6.2',
      imdbVotes: '96,141',
      imdbID: 'tt0499556',
      Type: 'movie',
      DVD: '05 Jun 2007',
      BoxOffice: '$22,486,409',
      Production: 'New Glory Productions',
      Website: 'N/A',
      Response: 'True',
    },
    {
      Title: 'I, Robot',
      Year: '2004',
      Rated: 'PG-13',
      Released: '16 Jul 2004',
      Runtime: '115 min',
      Genre: 'Action, Mystery, Sci-Fi',
      Director: 'Alex Proyas',
      Writer: 'Jeff Vintar, Akiva Goldsman, Isaac Asimov',
      Actors: 'Will Smith, Bridget Moynahan, Bruce Greenwood',
      Plot: 'In 2035, a technophobic cop investigates a crime that may have been perpetrated by a robot, which leads to a larger threat to humanity.',
      Language: 'English',
      Country: 'United States, Germany',
      Awards: 'Nominated for 1 Oscar. 1 win & 15 nominations total',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNmE1OWI2ZGItMDUyOS00MmU5LWE0MzUtYTQ0YzA1YTE5MGYxXkEyXkFqcGdeQXVyMDM5ODIyNw@@._V1_SX300.jpg',
      Ratings: [
        {
          Source: 'Internet Movie Database',
          Value: '7.1/10',
        },
        {
          Source: 'Metacritic',
          Value: '59/100',
        },
      ],
      Metascore: '59',
      imdbRating: '7.1',
      imdbVotes: '571,077',
      imdbID: 'tt0343818',
      Type: 'movie',
      DVD: '08 Jun 2004',
      BoxOffice: '$144,801,023',
      Production: 'N/A',
      Website: 'N/A',
      Response: 'True',
    },
    {
      Title: 'Swordfish',
      Year: '2001',
      Rated: 'R',
      Released: '08 Jun 2001',
      Runtime: '99 min',
      Genre: 'Action, Crime, Thriller',
      Director: 'Dominic Sena',
      Writer: 'Skip Woods',
      Actors: 'John Travolta, Hugh Jackman, Halle Berry',
      Plot: "A covert counter-terrorist unit called Black Cell led by Gabriel Shear wants the money to help finance their war against international terrorism, but it's all locked away. Gabriel brings in convicted hacker Stanley Jobson to help ...",
      Language: 'English, German',
      Country: 'United States',
      Awards: '5 wins & 10 nominations',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNzk5ZmQxMWYtM2QyNi00MTY3LTlmNjItYjUwODY3Y2YwOTIwXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
      Ratings: [
        {
          Source: 'Internet Movie Database',
          Value: '6.5/10',
        },
        {
          Source: 'Rotten Tomatoes',
          Value: '26%',
        },
        {
          Source: 'Metacritic',
          Value: '32/100',
        },
      ],
      Metascore: '32',
      imdbRating: '6.5',
      imdbVotes: '195,257',
      imdbID: 'tt0244244',
      Type: 'movie',
      DVD: '04 May 2010',
      BoxOffice: '$69,772,969',
      Production: 'N/A',
      Website: 'N/A',
      Response: 'True',
    },
    {
      Title: 'Rise of the Planet of the Apes',
      Year: '2011',
      Rated: 'PG-13',
      Released: '05 Aug 2011',
      Runtime: '105 min',
      Genre: 'Action, Drama, Sci-Fi',
      Director: 'Rupert Wyatt',
      Writer: 'Rick Jaffa, Amanda Silver, Pierre Boulle',
      Actors: 'James Franco, Andy Serkis, Freida Pinto',
      Plot: 'A substance designed to help the brain repair itself gives advanced intelligence to a chimpanzee who leads an ape uprising.',
      Language: 'English, Sign ',
      Country: 'United States, United Kingdom, Canada',
      Awards: 'Nominated for 1 Oscar. 21 wins & 43 nominations total',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BYzE3ZmNlZTctMDdmNy00MjMzLWFmZmYtN2M5N2YyYTQ1ZDJjXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
      Ratings: [
        {
          Source: 'Internet Movie Database',
          Value: '7.6/10',
        },
        {
          Source: 'Rotten Tomatoes',
          Value: '82%',
        },
        {
          Source: 'Metacritic',
          Value: '68/100',
        },
      ],
      Metascore: '68',
      imdbRating: '7.6',
      imdbVotes: '552,972',
      imdbID: 'tt1318514',
      Type: 'movie',
      DVD: '10 Nov 2013',
      BoxOffice: '$176,760,185',
      Production: 'N/A',
      Website: 'N/A',
      Response: 'True',
    },
  ];
}
