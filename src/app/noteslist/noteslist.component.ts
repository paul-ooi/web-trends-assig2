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

  constructor(private noteList : NotesService) { }

  ngOnInit() {
    this.noteList.getNotes().subscribe(results => this.notes = results);
  }


}
