// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { CocktailListComponent } from './cocktail-list.component';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { CocktailsState } from 'src/app/state/cocktail.state';
// import { RouterTestingModule } from '@angular/router/testing';
// import { NgxsModule, Store } from '@ngxs/store';
// import { By } from '@angular/platform-browser';
// import { CocktailService } from 'src/app/services/cocktail.service';
// import { FiltersState } from 'src/app/state/filter.state';

// describe('CocktailListComponent', () => {
//     let component: CocktailListComponent;
//     let fixture: ComponentFixture<CocktailListComponent>;
//     let store: Store;
//     let cocktailService: CocktailService;

//     beforeEach(async(() => {
//         TestBed.configureTestingModule({
//             declarations: [CocktailListComponent],
//             imports: [
//                 RouterTestingModule,
//                 HttpClientTestingModule,
//                 NgxsModule.forRoot([CocktailsState, FiltersState]),
//             ],
//         }).compileComponents();

//         store = TestBed.inject(Store);
//         cocktailService = TestBed.inject(CocktailService);
//     }));

//     beforeEach(() => {
//         fixture = TestBed.createComponent(CocktailListComponent);
//         component = fixture.componentInstance;
//         fixture.detectChanges();
//     });

//     it('should create', () => {
//         expect(component).toBeTruthy();
//     });

//     // TODO:
//     it('should have a previous button', () => {
//         expect(false).toBeTruthy();
//     });

//     // TODO:
//     it('should have a next button', () => {
//         expect(false).toBeTruthy();
//     });

//     // TODO:
//     it('should paginate forward', () => {
//         expect(false).toBeTruthy();
//     });

//     // TODO:
//     it('should initialize with previous button as disabled', () => {
//         expect(false).toBeTruthy();
//     });

//     // TODO:
//     it('should paginate backward', () => {
//         expect(false).toBeTruthy();
//     });

//     // TODO:
//     it('should display a list of cocktails', () => {
//         expect(false).toBeTruthy();
//     });
// });
