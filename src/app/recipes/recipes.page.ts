import { Component, OnInit } from '@angular/core';

import { RecipesService } from './recipes.service';
import { Recipes } from './recipes.model';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes: Recipes[];

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
    console.log(this.recipes);
  }

}
