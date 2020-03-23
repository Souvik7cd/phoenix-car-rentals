import { Component, ViewChildren, QueryList, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewInit {
  title = 'phoenix-car-rentals';
  message = "Prices so low you won't think twice";
  navLinks = [
    { name: 'Home', icon: 'home' },
    { name: 'Services', icon: 'directions_car' },
    { name: 'Pricing', icon: 'account_balance_wallet' },
    { name: 'Contact', icon: 'email' }
  ];

  @ViewChildren('site') siteLinks: QueryList<any>;
  
  // Receive element index from Navbar Component
  @Input() elementIndex: number;

  elements: any = []
  
  ngAfterViewInit() {
    this.elements = this.siteLinks.map(site => site.nativeElement.children)[0];
    console.log(this.elements);
  }

 //Scroll to Element
  scrollToElement(index: number): void {    
    this.elements[index].scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });    
  }
}