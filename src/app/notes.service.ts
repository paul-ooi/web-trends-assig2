import { Injectable } from '@angular/core';
import { Note } from './note';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notes : Note[] = [
    {
      id : 1,
      title : 'note1',
      dateCreate : new Date('2018/6/8'),
      body : 'note1 body',
      archived : false,
      categoryRef : 1
    },
    {
      id : 2,
      title : 'note2',
      dateCreate : new Date('2018/6/9'),
      body : 'note2 body',
      archived : false,
      categoryRef : 2
    },
    {
      id : 3,
      title : 'note3',
      dateCreate : new Date('2018/6/9'),
      body : 'note3 body',
      archived : false,
      categoryRef : 1
    },
  ];

  getNotes() : Observable<Note[]> {
    return of (this.notes);
  }
  
  constructor() { }
}
