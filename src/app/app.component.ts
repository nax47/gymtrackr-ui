import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AppDataService } from './services/app-data.service';
import config from '../assets/config.json'
import { TokenService } from './services/token.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'GymTrackr';
  refreshTokenValidity = config.refreshTokenValidity;


  constructor(private router: Router, public appData: AppDataService, private tokenService: TokenService, @Inject(DOCUMENT) private document: Document){}

  ngOnInit(): void {
    
    if(localStorage.getItem("accessToken") === null || localStorage.getItem("refreshToken") === null || localStorage.getItem("issueTime") === null || 
       localStorage.getItem("givenName") === null || localStorage.getItem("email") === null){
        this.appData.isLoggedIn = false;
    }
    else if(Date.now() > (parseInt(localStorage.getItem("issueTime")) + this.refreshTokenValidity)){  
      this.appData.isLoggedIn = false;
    }
    else {
      this.appData.accessToken = localStorage.getItem("accessToken");
      this.appData.refreshToken = localStorage.getItem("refreshToken");
      this.appData.issueTime = parseInt(localStorage.getItem("issueTime"));
      this.appData.givenName = localStorage.getItem("givenName");
      this.appData.email = localStorage.getItem("email");

      this.appData.isLoggedIn = true;
    }
  }

  navigateToolbarButton(): void{
    if(this.appData.isLoggedIn) { this.router.navigateByUrl("/track") }
    else { this.router.navigateByUrl("") }
  }

  logOut(): void{
    localStorage.clear();
    this.document.location.href = config.cognitoLogoutURL;
  }
}
