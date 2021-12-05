import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients:Ingredient[] =[
    new Ingredient('Flower',20),
    new Ingredient('Tomatoes',20),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
