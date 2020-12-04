import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgxsModule } from '@ngxs/store';
import { CocktailsState } from 'app/state/cocktail.state';
import { ReactiveFormsModule } from '@angular/forms';
import { FiltersState } from 'app/state/filter.state';

describe('SearchComponent', () => {
    let component: SearchComponent;
    let fixture: ComponentFixture<SearchComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SearchComponent],
            imports: [
                RouterTestingModule,
                HttpClientTestingModule,
                NgxsModule.forRoot([CocktailsState, FiltersState]),
                ReactiveFormsModule,
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    // TODO:
    it('should have a search field', () => {
        expect(false).toBeTruthy();
    });

    // TODO:
    it('should have a search button', () => {
        expect(false).toBeTruthy();
    });

    // TODO:
    it('should have a category dropdown', () => {
        expect(false).toBeTruthy();
    });

    // TODO:
    it('should have an ingredient dropdown', () => {
        expect(false).toBeTruthy();
    });

    // TODO:
    it('should have an alcoholic dropdown', () => {
        expect(false).toBeTruthy();
    });

    // TODO:
    it('should have a glass dropdown', () => {
        expect(false).toBeTruthy();
    });

    // TODO:
    it('should search for cocktails by name', () => {
        expect(false).toBeTruthy();
    });
});
