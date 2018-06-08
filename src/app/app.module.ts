import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { NoteslistComponent } from './noteslist/noteslist.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    NoteslistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
