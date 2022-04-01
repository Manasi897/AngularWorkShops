import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chores-list',
  templateUrl: './chores-list.component.html',
  styleUrls: ['./chores-list.component.scss']
})
export class ChoresListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ChoresList = ['DishWasher','Complete Launch Code Work','Buy Groceries'];
}
