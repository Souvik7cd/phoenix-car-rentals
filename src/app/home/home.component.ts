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

  imgSources = [
    '../../assets/images/home-img-0.jpg',
    '../../assets/images/home-img-1.jpg',
    '../../assets/images/home-img-2.jpg'
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
