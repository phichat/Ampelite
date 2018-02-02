import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() navToggle = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  navOpen(){
    this.navToggle.emit(true);
  }

}
