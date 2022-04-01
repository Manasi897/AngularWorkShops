import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.scss']
})
export class FavPhotosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  FavPhotos= ['../../assets/images/one.jpg','../../assets/images/two.jpg','../../assets/images/three.jpg'];
}
