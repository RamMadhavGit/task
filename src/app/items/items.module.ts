import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemsRoutingModule } from './items-routing.module';
import { BooksComponent } from './books/books.component';
import { BooksViewComponent } from './books-view/books-view.component';
import { MaterialsModule } from 'src/app/materials/materials.module';


@NgModule({
  declarations: [BooksComponent, BooksViewComponent],
  imports: [
    CommonModule,
    ItemsRoutingModule, MaterialsModule, FormsModule, ReactiveFormsModule
  ]
})
export class ItemsModule { }
