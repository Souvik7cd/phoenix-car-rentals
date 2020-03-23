import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  @Output('newElementIndex') elementIndex = new EventEmitter<number>();

  navLinks = [
    { name: 'Home', icon: 'home' }, 
    { name: 'Services', icon: 'directions_car' }, 
    { name: 'Pricing', icon: 'account_balance_wallet' }, 
    { name: 'Contact', icon: 'email' }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

  // send element(home, services, pricing, contact) index to App Component for navigation
  sendElementIndex(index: number):void {
    this.elementIndex.emit(index);
  }

}