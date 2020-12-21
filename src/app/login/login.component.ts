import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import config from '../../assets/config.json'
import { Router } from '@angular/router';
import { AppDataService } from '../services/app-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private appData: AppDataService, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    if(this.appData.isLoggedIn) { this.router.navigateByUrl("/track") }
  }

  signIn(): void {
    this.document.location.href = config.cognitoSignInURL;
  }

}
