import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

import { appConfig } from '../app.config';

@Injectable()
export class AuthenticationService {

  constructor(private http: Http) { }

  login(username: string, password: string) {
    this.http.post(appConfig.apiUrl + '/Api/Auth/SignIn', { "userName": "phichat", "password": "7322801dk" })
      .subscribe(result => {
        result.json();
      }, error => console.error(error));
    // return this.http.post<any>(appConfig.apiUrl + '/Api/Auth/SignIn', { "userName": "phichat", "password": "7322801dk" })
    //   .map(user => {
    //     // login successful if there's a jwt token in the response
    //     if (user && user.token) {
    //       // store user details and jwt token in local storage to keep user logged in between page refreshes
    //       localStorage.setItem('currentUser', JSON.stringify(user));
    //       console.log(JSON.stringify(user))
    //     }

    //     return user;
    //   });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
