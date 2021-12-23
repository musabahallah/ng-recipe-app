import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  constructor( private recipeService:RecipesService) {}

  ngOnInit(): void {}

  @Input() recipe: Recipe;

  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
