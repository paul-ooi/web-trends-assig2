import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NoteslistComponent } from './noteslist/noteslist.component';
import { CategoryComponent } from './category/category.component';
import { NoteComponent } from './note/note.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'notes', component: NoteslistComponent},
  {path: 'categories', component: CategoryComponent},
  {path: 'notes/:name', component: NoteComponent},
  {path: '**', component: ErrorComponent }
  // {path: 'contact', component: ContactPageComponent},
  // {path: 'details/:id', component: DetailsComponent}
]

@NgModule({
  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
