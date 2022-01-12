import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  constructor(private shoppingListService: ShoppingListService) {}

  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'First Recipe',
      'About Fajita chicken',
      'https://www.foodiecrush.com/wp-content/uploads/2020/06/Chicken-Fajitas-foodiecrush.com-008.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 2)]
    ),
    new Recipe(
      'Second Recipe',
      'About Fajita Meat',
      'https://www.foodiecrush.com/wp-content/uploads/2020/06/Chicken-Fajitas-foodiecrush.com-008.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 2)]
    ),
  ];

  getReceipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppinhList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
