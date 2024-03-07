import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { Movie } from '../../movie';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../services/movie.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('Should HomeComponent tested?', () => {
  let fixture: ComponentFixture<HomeComponent>;
  let component: HomeComponent;
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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [
        CommonModule,
        HomeComponent,
        MovieCardComponent,
        RouterTestingModule,
      ],
      providers: [MovieService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  describe('HTML Check', () => {
    it('should contain filter input with id "filter"', () => {
      const compiled = fixture.nativeElement;
      const filterInput = compiled.querySelector('#filter');
      expect(filterInput).toBeTruthy();
    });

    it('should have a clickable button', () => {
      const compiled = fixture.nativeElement;
      const button = compiled.querySelector('button');
      expect(button).toBeTruthy();
      expect(button.disabled).toBeFalsy();
    });
  });

  describe('Should Filter Form', () => {
    it('should call filterResults function with the first three letters of the movie title', () => {
      spyOn(component, 'filterResults');
      const compiled = fixture.nativeElement;
      const filterInput = compiled.querySelector('#filter');
      filterInput.value = mockMovies[0].Title.substr(0, 3);
      filterInput.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      expect(component.filterResults).toHaveBeenCalledWith(
        mockMovies[0].Title.substr(0, 3)
      );
    });

    it('should filter movies by title', () => {
      component.movieList = mockMovies;
      const filterValue = mockMovies[0].Title.substr(0, 3);
      component.filterResults(filterValue);
      fixture.detectChanges();
      expect(component.filteredMovieList.length).toBeGreaterThan(0);
      expect(
        component.filteredMovieList.every((movie) =>
          movie.Title.toLowerCase().includes(filterValue.toLowerCase())
        )
      ).toBeTruthy();
    });
  });
});
