import { TestBed } from '@angular/core/testing';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { HttpErrorResponse } from '@angular/common/http';

import { CocktailService } from './cocktail.service';
import { NgxsModule } from '@ngxs/store';
import { CocktailsState } from '../state/cocktail.state';
import { FiltersState } from '../state/filter.state';
import { ExpectedConditions } from 'protractor';
import { doesNotReject } from 'assert';

describe('CocktailService test using HttpClientTestingModule', () => {
    let httpTestingController: HttpTestingController;
    let service: CocktailService;
    const baseUri = 'https://www.thecocktaildb.com/api/json/v1/1';

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                NgxsModule.forRoot([CocktailsState, FiltersState]),
            ],
        });

        httpTestingController = TestBed.inject(HttpTestingController);
        service = TestBed.inject(CocktailService);
    });

    // TODO:
    it('should return the length of possible pages', () => {

        const numpages = service.getPagesLength();
        expect(numpages).toBeGreaterThanOrEqual(0);

    });

    // TODO:
    it('should return a list from paginateCocktails', (done:DoneFn) => {
       
        service.paginateCocktails(1).subscribe(cocktails => {
             expect(cocktails.drinks.length).toBeGreaterThanOrEqual(1);
             done();
        },err=>{ 
            console.log("Service not avilable");
        });
       

    });

    // TODO:
    it('should return cocktail details', (done:DoneFn) => {
        
        service.getCocktailDetails("RUM").subscribe(cocktails =>  {
            expect(cocktails.drinks.length).toBeGreaterThanOrEqual(1);
            done();
       },err=>{ 
           console.log("Service not avilable and schema not present");
       });
        
                
    });

    // TODO:
    it('should return available category list', (done:DoneFn) => {
        
        service.getCocktailDetails("RUM").subscribe(cocktails =>  {
            expect(cocktails.drinks.length).toBeGreaterThanOrEqual(1);
            done();
       },err=>{ 
           console.log("Service not avilable and schema not present");
       });
    
    // const categorylist:any = service.filterByCategory("SHOT","RUM");
     //expect(categorylist).toBeInstanceOf(String);
     

    });

    // TODO:
    it('should reset the search to letter a if no term is included', (done:DoneFn) => {
        
        service.searchCocktails("").subscribe(cocktails =>  {
            expect(cocktails.drinks.length).toBeGreaterThanOrEqual(1);
            done();
       },err=>{ 
           console.log("Service not avilable and schema not present");
       });
         

    });

    // TODO:
    it('should search by first letter', (done:DoneFn) => {
        service.searchCocktails("a").subscribe(cocktails =>  {
            expect(cocktails.drinks.length).toBeGreaterThanOrEqual(1);
            done();
       },err=>{ 
           console.log("Service not avilable and schema not present");
       });
    });

    // TODO:
    it('should search by name', (done:DoneFn) => {
        service.searchCocktails("RUM").subscribe(cocktails =>  {
            expect(cocktails.drinks.length).toBeGreaterThanOrEqual(1);
            done();
       },err=>{ 
           console.log("Service not avilable and schema not present");
       });
    });

    // TODO:
    it('should filter by category (ingredient)', (done:DoneFn) => {
        service.filterByCategory("SHOTS","RUM").subscribe(cocktails =>  {
            expect(cocktails.drinks.length).toBeGreaterThanOrEqual(1);
            done();
       },err=>{ 
           console.log("Service not avilable and schema not present");
       });

    });

    // TODO:
    it('should get a random drink', (done:DoneFn) => {
        service.getRandomCocktail().subscribe(cocktails =>  {
            expect(cocktails.drinks.length).toBeGreaterThanOrEqual(1);
            done();
       },err=>{ 
           console.log("Service not avilable and schema not present");
       });
    });

    // TODO:
    it('throws 404 error', () => {


      
    });
});
