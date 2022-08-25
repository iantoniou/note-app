import { Component, Input, OnInit } from '@angular/core';
import { eventDispatcher } from '../store';
import { ActionTypes } from '../store/actions';

declare const feather: any;

export interface Note {
  id: string;
  title: string;
  note: string;
}

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {
  @Input() note!: Note;

  constructor() { }

  ngOnInit(): void {
    feather.replace();
  }

  deleteNote(id: any) {
    const shouldDelete = confirm('Are you sure you want to delete this note?');

    if(shouldDelete) {
      eventDispatcher.next({type: ActionTypes.DELETE_NOTE, payload: id});
    }
  }

}
