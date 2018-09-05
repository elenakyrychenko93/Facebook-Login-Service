import { Injectable } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
  constructor(private fb: FacebookService,
              private router: Router) {

    const initParams: InitParams = {
      appId      : '445238145967367',
      cookie     : true,
      xfbml      : true,
      version    : 'v3.1'
    };

    this.fb.init(initParams);
  }

  // -----------------------check login status-------------------------------------
  LoginFacebookStatus() {
    this.fb.getLoginStatus().then((response) => {
      if (response.status === 'connected') {
        this.router.navigate(['/login']);
        console.log('Check status. Logged in!');
      } else {
        this.router.navigate(['/']);
        console.log('Check status. Logged out!');
      }
    });
  }
  // -----------------------check login status-------------------------------------

  facebookLogin() {
    this.fb.login()
      .then((response) => {
      if (response.status === 'connected') {
         this.router.navigate(['/login']);
        console.log('Logged in through fb!');
      } else {
         console.log('User cancelled login or did not fully authorize.');
      }
    });
  }

  facebookLogout() {
    this.router.navigate(['/']);
    this.fb.logout().then(() => {
      console.log('Logged out from fb!');
    });
  }
}
