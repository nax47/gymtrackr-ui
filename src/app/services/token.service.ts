import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import config from '../../assets/config.json'
import { AuthResponse } from '../models/auth-response';
import { UserInfoResponse } from '../models/user-info-response';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private http: HttpClient) { }

  getToken(authCode: string): Observable<HttpResponse<AuthResponse>>{
    
    const body = new HttpParams()
                    .set('code', authCode)
                    .set('grant_type', 'authorization_code')
                    .set('client_id', config.cognitoClientId)
                    .set('redirect_uri', 'http://localhost:4200/callback');

    return this.http.post<AuthResponse>(config.cognitoTokenURL, body, 
                                        {headers: new HttpHeaders()
                                                      .set('Authorization', 'Basic '+btoa(config.cognitoClientId+":"+config.cognitoClientSecret)),
                                          observe: 'response'});
  }

  getUserInfo(accessToken: string): Observable<HttpResponse<UserInfoResponse>>{
    return this.http.get<UserInfoResponse>(config.cognitoUserInfoURL, 
      {headers: new HttpHeaders()
                    .set('Authorization', 'Bearer '+accessToken),
        observe: 'response'});
  }

}
