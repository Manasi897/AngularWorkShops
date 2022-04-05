import { Component, OnInit } from '@angular/core';
import {Movie} from 'src/utility/Movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


movies:Movie[]=[{movie_name:"Gladiator",image:'../../assets/images/one.jpg',flag:true},
{movie_name:"Twilight",image:'../../assets/images/two.jpg',flag:true},
{movie_name:"Vazir",image:'../../assets/images/three.jpg',flag:true},
{movie_name:"F&F",image:'../../assets/images/two.jpg',flag:true},
{movie_name:"three",image:'../../assets/images/one.jpg',flag:true},
{movie_name:"DDLJ",image:'../../assets/images/three.jpg',flag:true}]
 

  toggleImage(movies:Movie)
  {
    movies.flag =! movies.flag;
  }

  // WatchList()
  // {
    
  // }
}
