import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NotesService } from '../notes.service';


@Component({
  selector: 'app-noteslist',
  templateUrl: './noteslist.component.html',
  styleUrls: ['./noteslist.component.css']
})

export class NoteslistComponent implements OnInit {
  notes : Note[];
  error : string;

  constructor(private noteList : NotesService) { }

  get_filtered(search: string){
    this.noteList.getNotes(search).subscribe(results => this.notes = results, 
      error => {
        this.error = error.name + ": " + error.statusText
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.noteList.getNotes().subscribe(results => this.notes = results, 
      error => {
        this.error = error.name + ": " + error.statusText
        console.log(error);
      }
    );
  }


}
