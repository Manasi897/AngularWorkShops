import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
MovieList = ['Gladiator','Twilight','Vazir','F&F','three','DDLJ'];
}
