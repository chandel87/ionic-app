import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { RecipesService } from '../recipes.service';
import { Recipes } from '../recipes.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})

export class RecipeDetailPage implements OnInit {
  recipe: Recipes;
  constructor(
    private activatedRoute: ActivatedRoute, 
    private recipesService: RecipesService,
    private router: Router,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramsMap) => {
      if (!paramsMap.has('recipeId')) {
        // redirect to home page if recipe id doesn't exist in params map'
        return;
      }
      const recipeId = paramsMap.get('recipeId');
      this.recipe = this.recipesService.getRecipe(recipeId);
    });
  }

  onDeleteRecipe() {
    this.alertCtrl.create({
      header:  'Are you sure?',
      message: 'Are you sure you want to delete this recipe?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      }, {
        text: 'Delete',
        handler: () => {
          this.recipesService.deleteRecipe(this.recipe.id);
          this.router.navigate(['/recipes']);
        }
      }]
    })
    .then(alertEl => {
      alertEl.present();
    });
  }
}
