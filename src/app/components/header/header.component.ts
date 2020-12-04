import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Store } from '@ngxs/store';
import { CocktailService } from 'app/services/cocktail.service';
import { SetCurrent } from 'app/state/cocktail.action';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  searchTerm: string = '';

  constructor(
    private router: Router,
    private cocktailService: CocktailService,
    private store: Store,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  returnHome(): void {
    this.router.navigate(['']);
  }

  cocktailList(): void {
    this.router.navigate(['cocktails']);
  }

  randomRecipe(): void {
    this.cocktailService.getRandomCocktail().subscribe((cocktail) => {
      if (!this.activatedRoute.snapshot.params['id']) {
        this.router.navigate(['cocktails', cocktail.drinks[0].idDrink]);
      }

      this.store.dispatch(new SetCurrent(cocktail.drinks[0]));
    });
  }
}
