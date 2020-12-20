import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppDataService } from './app-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GymTrackr';

  constructor(private router: Router, public appData: AppDataService){
    this.appData.isLoggedIn = false;
  }

  ngOnInit(): void {

  }

  navigateToolbarButton(): void{
    if(this.appData.isLoggedIn) { this.router.navigateByUrl("/track") }
    else { this.router.navigateByUrl("") }
  }

  logOut(): void{

  }

}
