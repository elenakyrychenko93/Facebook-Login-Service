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

  facebookLogin() {
    this.fb.login()
      .then((response) => {
      if (response.status === 'connected') {
         this.router.navigate(['/login']);
      } else {
         console.log('User cancelled login or did not fully authorize.');
      }
    });
  }

  facebookLogout() {
    this.fb.logout().then(() => {
      this.router.navigate(['/']);
      console.log('Logged out!');
    });
  }
}
