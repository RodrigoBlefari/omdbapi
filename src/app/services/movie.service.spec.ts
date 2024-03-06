// Imports
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MovieService } from './movie.service';
import { SnackbarService } from './snackbar-service.service';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Movie } from '../movie';

describe('MovieService', () => {
  let service: MovieService;
  let snackbarService: SnackbarService;
  let router: Router;
  let fetchSpy: jasmine.Spy;
  let mockMovies: Movie[] = [
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
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [SnackbarService, Router],
    });
    service = TestBed.inject(MovieService);
    snackbarService = TestBed.inject(SnackbarService);
    router = TestBed.inject(Router);
    fetchSpy = spyOn(window, 'fetch');
  });

  describe('Should all initialize?', () => {
    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should have SnackbarService', () => {
      expect(snackbarService).toBeTruthy();
    });

    it('should have Router', () => {
      expect(router).toBeTruthy();
    });

    it('should have apiKey defined', () => {
      expect(service.apiKey).toEqual(environment.apiKey);
    });

    it('should have apiUrlOmdb defined', () => {
      expect(service.apiUrlOmdb).toEqual(environment.apiUrlOmdb);
    });

    it('should have apiUrlMovies defined', () => {
      expect(service.apiUrlMovies).toEqual(environment.apiUrlMovies);
    });
  });

  describe('Should get getMovieList and responses?', () => {
    it('should fetch movie list using apiUrlMovies from environment', async () => {
      const mockResponse: Movie[] = mockMovies;

      fetchSpy.and.returnValue(
        Promise.resolve({
          json: () => Promise.resolve(mockResponse),
        })
      );

      const movies = await service.getMovieList();

      expect(fetchSpy).toHaveBeenCalledWith(environment.apiUrlMovies);
      expect(movies).toEqual(mockResponse);
    });

    it('should return an empty array', async () => {
      const mockResponse: Movie[] = [];

      fetchSpy.and.returnValue(
        Promise.resolve({
          json: () => Promise.resolve(mockResponse),
        })
      );

      const movies = await service.getMovieList();

      expect(fetchSpy).toHaveBeenCalledWith(environment.apiUrlMovies);
      expect(movies).toEqual(mockResponse);
    });
  });

  describe('Should get getMovieByImdbID and responses?', () => {
    const imdbID = 'tt1234567';

    it('should fetch movie by imdbID using apiUrlOmdb and apiKey from environment', async () => {
      const mockMovie: Movie = mockMovies[0];
      fetchSpy.and.returnValue(
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve(mockMovie),
        } as Response)
      );

      const result = await service.getMovieByImdbID(imdbID);

      expect(window.fetch).toHaveBeenCalledWith(
        `${environment.apiUrlOmdb}/?i=${imdbID}&apikey=${environment.apiKey}`
      );
      expect(result).toEqual(mockMovie);
    });

    it('should show snackbar and navigate to root if status is 401', async () => {
      fetchSpy.and.returnValue(
        Promise.resolve({
          status: 401,
        } as Response)
      );
      spyOn(snackbarService, 'show');
      spyOn(router, 'navigate');

      const result = await service.getMovieByImdbID(mockMovies[0].imdbID);

      expect(snackbarService.show).toHaveBeenCalledWith(
        'Acesso não Autorizado, verifique apiKey',
        '#db4a4a'
      );
      expect(router.navigate).toHaveBeenCalledWith(['/']);
      expect(result).toBeUndefined();
    });

    it('should show snackbar and navigate to root if fetch fails', async () => {
      fetchSpy.and.returnValue(Promise.reject('Error'));
      spyOn(snackbarService, 'show');
      spyOn(router, 'navigate');

      const result = await service.getMovieByImdbID(mockMovies[0].imdbID);

      expect(snackbarService.show).toHaveBeenCalledWith(
        'Erro ao chamar movie details:',
        '#db4a4a'
      );
      expect(router.navigate).toHaveBeenCalledWith(['/']);
      expect(result).toBeUndefined();
    });
  });
});
