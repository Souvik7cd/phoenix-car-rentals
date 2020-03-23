import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  servicesMsg: string = `
    Lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt 
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  `;

  services = [
    {
      img: "../../assets/images/rental-car.png",
      title: "Easy Rentals",
      desc: {
        line0: "Lorem ipsum dolor sit amet",
        line1: "consectetur adipiscing elit"
      }
    },
    {
      img:"../../assets/images/taxi-driver.png", 
      title:"Expert Drivers",
      desc: {
        line0: "Lorem ipsum dolor sit amet",
        line1: "consectetur adipiscing elit"
      }
    },
    {
      img:"../../assets/images/clock.png", 
      title:"24x7 Service",
      desc: {
        line0: "Lorem ipsum dolor sit amet",
        line1: "consectetur adipiscing elit"
      }
    },
    {
      img:"../../assets/images/rupee.png", 
      title:"No Hidden Costs",
      desc: {
        line0: "Lorem ipsum dolor sit amet",
        line1: "consectetur adipiscing elit!"
      }
    }
  ]
}

     