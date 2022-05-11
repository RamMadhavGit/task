import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NYTComponent } from '../app/nyt/nyt.component';
import { ItemsModule } from './items/items.module'

const routes: Routes = [
  { path:'NYT', component: NYTComponent },
  { path: 'items', loadChildren:()=> import("./items/items.module").then(module=>module.ItemsModule)}, 
  { path: 'articles', loadChildren:()=> import("./item-article/item-article.module").then(module=>module.ItemArticleModule)}, 












  { path:'', pathMatch:'full', redirectTo: 'NYT' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
