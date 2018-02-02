import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit {
  // @ViewChild('sidenav') sidenav: MatSidenav;
  
  @Output()
  isToggleNavmenu = new EventEmitter<boolean>();
  constructor() { }

  @Input() toggle;

  ngOnInit() {
  }

  // reason = '';

  // close(reason: string) {
  //   this.reason = reason;
  //   this.sidenav.close();
  // }

  // shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

}
