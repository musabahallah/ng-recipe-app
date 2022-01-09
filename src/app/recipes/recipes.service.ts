import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private shoppingListService: ShoppingListService) { }

  private recipes: Recipe[] = [
    new Recipe(
      'First Recipe',
      'About Fajita chicken',
      'https://www.foodiecrush.com/wp-content/uploads/2020/06/Chicken-Fajitas-foodiecrush.com-008.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 2)
      ]
    ),
    new Recipe(
      'Second Recipe',
      'About Fajita Meat',
      'https://www.foodiecrush.com/wp-content/uploads/2020/06/Chicken-Fajitas-foodiecrush.com-008.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 2)
      ]
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
}
