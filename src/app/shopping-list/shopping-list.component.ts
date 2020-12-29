import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];
  private igChangesub: Subscription;

  constructor(private shoppinglistSvc: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppinglistSvc.getIngredients();
   this.igChangesub = this.shoppinglistSvc.ingredientsChanged.subscribe((ingredients: Ingredient[])=> {
      this.ingredients = ingredients;
    })
  }

    ngOnDestroy(): void {
      this.igChangesub.unsubscribe();
    }
}
