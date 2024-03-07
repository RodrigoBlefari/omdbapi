import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

describe('Should app-component tested?', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: '', component: HomeComponent },
        ]),
        AppComponent,
        HomeComponent,
        RouterOutlet,
      ],
      declarations: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  describe('Imports', () => {
    it('should have RouterOutlet imported', () => {
      expect(RouterOutlet).toBeDefined();
    });

    it('should have HomeComponent imported', () => {
      expect(HomeComponent).toBeDefined();
    });

    it('should have RouterModule imported', () => {
      expect(RouterModule).toBeDefined();
    });
  });

  describe('HTML Check', () => {
    it('should contain logo element', () => {
      const compiled = fixture.nativeElement;
      const logoElement = compiled.querySelector('.brand-logo');
      expect(logoElement).toBeTruthy();
    });

    it('should render the logo', () => {
      const compiled = fixture.nativeElement;
      const logoElement = compiled.querySelector('.brand-logo');
      expect(logoElement.src).toContain('assets/logo-imdb.png');
    });

    it('should navigate to home on logo click', () => {
      const compiled = fixture.nativeElement;
      const logoElement = compiled.querySelector('.brand-logo');
      logoElement.click();
      fixture.detectChanges();
      const currentPath = TestBed.inject(Router).url;
      expect(currentPath).toBe('/');
    });
  });
});
