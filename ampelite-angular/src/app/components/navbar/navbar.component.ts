import { Component, Input, Output, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Output() navToggle = new EventEmitter<boolean>();
  navOpen() {
    this.toggle = !this.toggle;
    this.navToggle.emit(this.toggle);
  }

  @Input() toggle;

  constructor() { }


}
