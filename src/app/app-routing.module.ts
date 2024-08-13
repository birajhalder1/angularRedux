import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'fruits',
    pathMatch: 'full'
  },
  {
    path: 'fruits',
    loadChildren: () => import('./fruits/fruits.module').then( m => m.FruitsPageModule)
  },
  {
    path: 'vegetables',
    loadChildren: () => import('./vegetables/vegetables.module').then( m => m.VegetablesPageModule)
  },
  {
    path: 'add-item',
    loadChildren: () => import('./add-item/add-item.module').then( m => m.AddItemPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
