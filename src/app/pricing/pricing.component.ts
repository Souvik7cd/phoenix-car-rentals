import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  constructor() { }

  pricingCharts: any = [
    { 
      destination: 'Intercity',
      price: '₹ 1400',
      rate: '8hrs / 8km',
      features: [
        'Free WiFi',
        'Newspaper',
        'Air Conditioned',
        'Drinking water'
      ]
    },
    { 
      destination: 'Intercity',
      price: '₹ 1800',
      rate: '10hrs / 10km',
      features: [
        'Free WiFi',
        'Newspaper',
        'Air Conditioned',
        'Drinking water'
      ]
    },
    { 
      destination: 'Outstation',
      price: '₹ 2100',
      rate: '10hrs / 100km',
      features: [
        'Free WiFi',
        'Newspaper',
        'Air Conditioned',
        'Drinking water'
      ]
    }
  ]
  ngOnInit(): void {
  }

}
