import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from '../notes.service';
import { Note } from '../note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  
  note:Note;
  name: string;
  error: string;

  getName(): void {
    this.name = this.route.snapshot.paramMap.get('name');
    console.log(this.name)
  }

  constructor(
    private route: ActivatedRoute,
    private notesService: NotesService
  ) { }

  ngOnInit() {
    // this.getNum();
    const name = this.route.snapshot.paramMap.get('name');
    console.log(name)

    //call the service 
    this.notesService.getNotes(name).subscribe(data => {
      console.log(data)
      this.note = data[0]},
      error=>{
        this.error = error.name + ": " + error.statusText
        console.log(error)
      }
    );
  }

}
