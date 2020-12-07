import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import config from '../../assets/config.json'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }

  signIn(): void {
    this.document.location.href = config.cognitoSignInURL;
  }

}
