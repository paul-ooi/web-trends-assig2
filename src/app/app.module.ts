import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { NoteslistComponent } from './noteslist/noteslist.component';
import { NoteComponent } from './note/note.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    NoteslistComponent,
    NoteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
