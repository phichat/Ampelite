import { MediaMatcher } from '@angular/cdk/layout';
import { Component, ChangeDetectorRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms/src/directives/ng_model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  @ViewChild("snav") public snav;
// constructor(public mySuperService: MySuperService) {
//     this.mySuperService.sidenav = this.mainNav;
// }

  constructor(private route: Router, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  
 

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
