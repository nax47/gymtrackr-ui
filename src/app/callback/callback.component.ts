import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { AppDataService } from '../services/app-data.service';
import { TokenService } from '../services/token.service';


@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  constructor(private router: Router, private tokenService: TokenService, private appData: AppDataService) { }

  private headers: any;
  public imageUrl: string;

  ngOnInit(): void {
    var url = this.router.url;

    if(url.includes("code")){

      var authCode = this.parseUrl(url, "code");
     
      this.tokenService.getToken(authCode)
      .subscribe((response)=>{

        const keys = response.headers.keys();
        this.headers = keys.map(key =>
          '${key}: ${response.headers.get(key)}');

        this.appData.accessToken = response.body.access_token;
        this.appData.refreshToken = response.body.refresh_token;
        this.appData.tokenExpiry = response.body.expires_in;
        
        this.appData.isLoggedIn = true;

        this.getUserInfo();
      });
      
    }
    else{
      console.log("ERROR getting Authorization Code!")
    }
  }

  parseUrl(url: string, type: string): string{
    var index: number = url.indexOf(type);

    //Facebook token appends #_=_ after Auth Code
    if(url.includes("#_=_")){
      return url.slice(index+type.length+1,url.indexOf("#_=_"));
    }
    else return url.slice(index+type.length+1,url.length);
  }

  getUserInfo(): void{
    this.tokenService.getUserInfo(this.appData.accessToken)
    .subscribe((response)=>{
        const keys = response.headers.keys();
        this.headers = keys.map(key =>
          '${key}: ${response.headers.get(key)}');

        this.appData.givenName = response.body.given_name;
        this.appData.email = response.body.email;
        //this.appData.picture = response.body.picture;
        //this.imageUrl = URL.createObjectURL(this.appData.picture);
        this.router.navigateByUrl("/track");
    });
  }

}
