import { Injectable } from '@angular/core';
import { Note } from './note';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  url = 'http://api.paulooidesign.ca/notes.php?api_key=python&user=Diego';
  
  getNotes() : Observable<Note[]> {
    return this.httpClient.get<Note[]>(this.url)
    // return of (this.notes);
  }
  
  constructor(private httpClient: HttpClient) { }
}
