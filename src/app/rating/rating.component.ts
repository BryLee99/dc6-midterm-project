import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Array = [1,1,1,1,1];
  rating = 0;

  onClick(rating: number){
    this.rating = rating;
    console.log(rating)
  }
  
}
