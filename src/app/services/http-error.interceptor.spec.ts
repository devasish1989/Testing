import { TestBed } from '@angular/core/testing';
import { HttpErrorInterceptor } from './http-error.interceptor';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpErrorResponse } from '@angular/common/http';
import { CocktailService } from './cocktail.service';
import { NgxsModule } from '@ngxs/store';
import { CocktailsState } from '../state/cocktail.state';
import { FiltersState } from '../state/filter.state';

describe('HttpErrorInterceptor', () => {
    let httpErrorInterceptor: HttpErrorInterceptor;
    let httpTestingController: HttpTestingController;
    let cocktailService: CocktailService;
    const baseUri = 'https://www.thecocktaildb.com/api/json/v1/1';

    beforeEach(async () =>
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                NgxsModule.forRoot([CocktailsState, FiltersState]),
            ],
            providers: [
                CocktailService,
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: HttpErrorInterceptor,
                    multi: true,
                },
            ],
        })
    );

    beforeEach(() => {
        httpErrorInterceptor = new HttpErrorInterceptor();
        httpTestingController = TestBed.inject(HttpTestingController);
        cocktailService = TestBed.inject(CocktailService);
    });

    // TODO: Ensure that service does catch errors
    it('should catch server error', async () => {
        expect(false).toBeTruthy();
    });
});
