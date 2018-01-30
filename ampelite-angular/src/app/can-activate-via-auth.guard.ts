import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {
  constructor(private route: Router) { }
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  //   return true;
  // }
  canActivate() {
    // Put your logic to enable or disable the route required check
    let isAuth = false;
    if (!isAuth) {
      this.route.navigate(['./notfound'])
    }
    return isAuth;

  }

}
