import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from 'src/app/materials/materials.module';
import { ItemArticleRoutingModule } from './item-article-routing.module';
import { ArticleComponent } from './article/article.component';


@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    ItemArticleRoutingModule, MaterialsModule
  ]
})
export class ItemArticleModule { }
