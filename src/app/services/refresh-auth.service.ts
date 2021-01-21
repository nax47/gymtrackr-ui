import { Injectable } from '@angular/core';
import { AppDataService } from '../services/app-data.service';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class RefreshAuthService {

  constructor(public appData: AppDataService, private tokenService: TokenService) { }

  refreshToken(): void{
    this.tokenService.refreshToken(this.appData.refreshToken)
    .subscribe((response) => {
      this.appData.accessToken = response.body.access_token;
      localStorage.setItem("accessToken", response.body.access_token);
    });
}
}
