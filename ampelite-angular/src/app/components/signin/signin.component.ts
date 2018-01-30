import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { AuthenticationService } from '../../_services/index'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sign-in',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  submit() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(
      data => {
        this.router.navigate([this.returnUrl]);
      },
      error => {
        // this.alertService.error(error);
        this.loading = false;
      });
  }
}

