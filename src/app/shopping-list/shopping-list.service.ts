import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  constructor() {}

  ingredientChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Flower', 20),
    new Ingredient('Tomatoes', 20),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredent: Ingredient) {
    this.ingredients.push(ingredent);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
  addIngredients(ingredients:Ingredient[]) {

    this.ingredients.push(...ingredients);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}
