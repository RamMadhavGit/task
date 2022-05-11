import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component'
import { BooksViewComponent } from './books-view/books-view.component'
 
const routes: Routes = [
  {path: 'category', component: BooksComponent },
  {path: 'books/:data', component: BooksViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
