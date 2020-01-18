import { Injectable } from '@angular/core';
import { Recipes } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipes[] = [
    {
      id: 'r1',
      title: 'Paav Bhaaji',
      imageUrl: 'https://zaykarecipes.com/wp-content/uploads/2017/02/Pav-Bhaji-Recipe.jpg',
      ingredients: ['Bun', 'Bhaaji', 'Onion', 'Lemon']
    },
    {
      id: 'r2',
      title: 'Aaloo Paratha',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT1ZLFmcXMYO1ebGfw2C_j5guQRElGcxoZ2-leaTDaK8GgJ8fxk',
      ingredients: ['Mashed Potato', 'Butter', 'Pickles', 'Raita']
    }
  ];

  constructor() { }

  public getAllRecipes() {
    return [...this.recipes];
  }

  public getRecipe(recipeId: string) {
    return [...this.recipes].find(recipe => recipe.id === recipeId); // using spread operator to return a copy
  }
}
