import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private route: Router) {
  }

  goHome() {
    this.route.navigate(['/home'], { queryParams: { username: 'phichat_dk@hotmail.com', password: '7322801dk' } });
  }
  goSignin() {
    this.route.navigate(['/sign-in']);
  }
  private currentstate = "false";
  get getCurrentState() {
    this.currentstate = localStorage.getItem("isRouteActivated");
    return this.currentstate;
  }
  onActive() {
    this.currentstate = localStorage.getItem("isRouteActivated");
    if (this.currentstate == "false") {
      localStorage.setItem("isRouteActivate", "true")
    } else {
      localStorage.setItem("isRouteActivate", "false");
    }
  }
}
