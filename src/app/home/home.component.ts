import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  index: number;
  ngOnInit(): void {
    this.index = 0;
  }
  title = "Phoenix";
  subtitle = ["Car Rentals", "CAR RENTALS"];
  message = "Transform your journeys into memories";

  imgSources = [
    'https://cdn.pixabay.com/photo/2016/11/18/21/41/car-1837006_960_720.jpg',
    'https://cdn.pixabay.com/photo/2019/07/07/14/03/fiat-4322521_960_720.jpg',
    'https://cdn.pixabay.com/photo/2017/05/31/09/11/car-2359573_960_720.jpg'
  ]

  carousel(): any {
    if (this.index === this.imgSources.length - 1)
      this.index = 0;
    else
      this.index++;
  }
  // repeat with the interval of 2 seconds
  timerId = setInterval(() => this.carousel(), 4000);
}
