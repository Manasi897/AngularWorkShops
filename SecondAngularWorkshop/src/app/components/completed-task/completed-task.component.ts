import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-completed-task',
  templateUrl: './completed-task.component.html',
  styleUrls: ['./completed-task.component.scss']
})
export class CompletedTaskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 ToDo = ['DishWasher','Complete Launch Code Work','Buy Groceries','WashClothes'];
  Completed = ['DishWasher','Complete Launch Code Work','Buy Groceries','WashClothes'];
 
  
}
