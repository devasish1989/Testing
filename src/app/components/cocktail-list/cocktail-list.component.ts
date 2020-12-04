import { Component, OnInit } from '@angular/core';

import { Store, Select } from '@ngxs/store';

import { Observable } from 'rxjs';


import { Router } from '@angular/router';

import { SetCurrListView } from 'app/state/filter.action';
import { FiltersState } from 'app/state/filter.state';
import { CocktailsState } from 'app/state/cocktail.state';
import { Cocktail } from 'app/models/cocktail.model';
import { Paginate, Populate, SetCurrent } from 'app/state/cocktail.action';
import { CocktailService } from 'app/services/cocktail.service';


@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss'],
})
export class CocktailListComponent implements OnInit {
  @Select(CocktailsState.getCocktails) cocktailList$: Observable<Cocktail[]>;
  displayedColumns: string[] = ['img', 'name', 'category', 'alcoholic', 'view'];
  currIdx = 0;
  pagesLength;
  @Select(FiltersState.getCurrListView) currListView$: Observable<string>;

  constructor(
    private store: Store,
    private router: Router,
    private cocktailService: CocktailService
  ) {
    this.currIdx = this.store.selectSnapshot(CocktailsState.getCurrentIndex);
  }

  ngOnInit(): void {
    this.store.dispatch(new Populate({}));
    this.pagesLength = this.cocktailService.getPagesLength();
  }

  viewRecipe(cocktail: Cocktail): void {
    this.router.navigate(['cocktails', cocktail.idDrink]);
    this.store.dispatch(new SetCurrent(cocktail));
  }

  previousPage(): void {
    this.currIdx -= 1;
    this.store.dispatch(new Paginate(this.currIdx));
  }

  nextPage(): void {
    this.currIdx += 1;
    this.store.dispatch(new Paginate(this.currIdx));
  }

  setCurrentListView(view: string): void {
    this.store.dispatch(new SetCurrListView(view));
  }
}
