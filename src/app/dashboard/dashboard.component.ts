import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppDataService } from '../app-data.service';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title = 'GymTrackr';
  private headers: any;
  public imageUrl: String;

  constructor(private router: Router, public appData: AppDataService, private tokenService: TokenService) { }

  ngOnInit(): void {
    if(!this.appData.isLoggedIn) { this.router.navigateByUrl("");}

    this.tokenService.getUserInfo(this.appData.accessToken)
    .subscribe((response)=>{
        const keys = response.headers.keys();
        this.headers = keys.map(key =>
          '${key}: ${response.headers.get(key)}');

        this.appData.givenName = response.body.given_name;
        this.appData.picture = response.body.picture;
        this.imageUrl = URL.createObjectURL(this.appData.picture);
    });
  }

}
