import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { toUnicode } from 'punycode';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  supscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  @ViewChild('ingredents', { static: false }) ingredentsData: NgForm;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.supscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.ingredentsData.setValue({
          nameInput: this.editedItem.name,
          amountInput: this.editedItem.amount,
        });
      }
    );
  }

  onSubmit() {
    const ingName = this.ingredentsData.value.nameInput;
    const ingAmount = this.ingredentsData.value.amountInput;
    const newIngredient = new Ingredient(ingName, ingAmount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(
        this.editedItemIndex,
        newIngredient
      );
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.editMode = false;
    this.ingredentsData.reset();
  }


  clearForm() {
    this.ingredentsData.reset();
    this.editMode = false;
  }

  deleteItem() {
    this.clearForm();
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
  }


  ngOnDestroy(): void {
    this.supscription.unsubscribe();
  }
}
