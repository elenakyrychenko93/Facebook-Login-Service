import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AfterLoginComponent } from './after-login/after-login.component';

import { FacebookModule } from 'ngx-facebook';
import {LoginService} from './services/login.service';
import {Routes, RouterModule} from '@angular/router';

const appRoutes: Routes =[
  { path: '', component: LoginPageComponent},
  { path: 'login', component: AfterLoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AfterLoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FacebookModule.forRoot()
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
