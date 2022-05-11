import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialsModule } from '../app/materials/materials.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NYTComponent } from './nyt/nyt.component';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldDefaultOptions, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { DatePipe } from '@angular/common';
 

const appearance: MatFormFieldDefaultOptions = {
  appearance: 'outline'
};

@NgModule({
  declarations: [
    AppComponent,
    NYTComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, MaterialsModule, HttpClientModule, ReactiveFormsModule, FormsModule

  ],
  providers: [DatePipe, {
    provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
    useValue: appearance
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
   