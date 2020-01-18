import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    children: [
      {
        path: '',   // url ->  http://localhost:8100/recipes
        loadChildren: () => import('./recipes/recipes.module').then( m => m.RecipesPageModule)
        // loadChildren: './recipes/recipes.module#RecipesPageModule'    // alternative approach
      },
      {
        path: ':recipeId',  // url -> http://localhost:8100/recipe-detail/recipeId
        loadChildren: () => import('./recipes/recipe-detail/recipe-detail.module').then( m => m.RecipeDetailPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
