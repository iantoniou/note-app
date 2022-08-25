import { Component, OnInit } from '@angular/core';
import { eventDispatcher, store } from './store';
import { ActionTypes } from './store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor() {
    store.subscribe((state) => {
      const {notes} = state;
      this.notes = notes;
    });
  }

  notes: any[] = [];

  ngOnInit() {
    eventDispatcher.next({type: ActionTypes.GET_NOTES});
  }
}
