import { Injectable } from '@angular/core';
import { Note } from './note';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  url = 'http://api.paulooidesign.ca/notes.php?api_key=python&user=Diego';
  
  getNotes(name?: string) : Observable<Note[]> {
    let url_final:string = this.url;
    if(name){
      url_final += url_final + "&title=" + name;
      console.log(url_final);
    }
    return this.httpClient.get<Note[]>(url_final);
    
    // return of (this.notes);
  }
  
  constructor(private httpClient: HttpClient) { }
}
