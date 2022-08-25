import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../note-card/note-card.component';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {
  @Input() notes!: Array<Note>;
  

  constructor() { }

  ngOnInit(): void {
  }

}
