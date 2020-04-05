import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  @Output('newElementIndex') elementIndex = new EventEmitter<number>();

  navLinks = [
    { name: 'Home', icon: 'fas fa-home' }, 
    { name: 'Services', icon: 'fas fa-car-alt' }, 
    { name: 'Pricing', icon: 'fas fa-wallet' }, 
    { name: 'Contact', icon: 'fas fa-phone-alt' }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

  // send element(home, services, pricing, contact) index to App Component for navigation
  sendElementIndex(index: number):void {
    this.elementIndex.emit(index);
  }

}