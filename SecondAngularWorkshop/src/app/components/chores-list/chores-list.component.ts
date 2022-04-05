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

  Yesterday = ['DishWasher','Complete Launch Code Work','Buy Groceries'];
  Today = ['DishWasher','Complete Launch Code Work','Buy Groceries','WashClothes'];
  Tomorrow = ['DishWasher','Complete Launch Code Work'];
  
}
