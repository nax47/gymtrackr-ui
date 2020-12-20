import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { AppDataService } from '../app-data.service';
import { AuthResponse } from '../auth-response';
import { TokenService } from '../token.service';


@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  constructor(private router: Router, private tokenService: TokenService, private appData: AppDataService) { }

  private headers: any;
  private authResponse: AuthResponse;

  ngOnInit(): void {
    var url = this.router.url;

    if(url.includes("code")){

      var authCode = this.parseUrl(url, "code");
     
      this.tokenService.getToken(authCode)
      .subscribe((response)=>{

        const keys = response.headers.keys();
        this.headers = keys.map(key =>
          '${key}: ${response.headers.get(key)}');

        this.authResponse = response.body;
        this.appData.accessToken = this.authResponse.access_token;
        this.appData.refreshToken = this.authResponse.refresh_token;
        this.appData.tokenExpiry = this.authResponse.expires_in;
        
        this.appData.isLoggedIn = true;
        this.router.navigateByUrl("/track")
      });
      
    }
    else{
      console.log("ERROR getting Authorization Code!")
    }
  }

  parseUrl(url: String, type: string): string{
    var index: number = url.indexOf(type);

    //Facebook token appends #_=_ after Auth Code
    if(url.includes("#_=_")){
      return url.slice(index+type.length+1,url.indexOf("#_=_"));
    }
    else return url.slice(index+type.length+1,url.length);
  }

}
