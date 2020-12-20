import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  private _accessToken: String;
  private _refreshToken: String;
  private _tokenExpiry: number;

  private _isLoggedIn: boolean;
  private _givenName: String;
  private _picture: Blob;


  constructor() { }

  public get accessToken(): String {
    return this._accessToken;
  }
  public set accessToken(value: String) {
    this._accessToken = value;
  }

  public get refreshToken(): String {
    return this._refreshToken;
  }
  public set refreshToken(value: String) {
    this._refreshToken = value;
  }

  public get tokenExpiry(): number {
    return this._tokenExpiry;
  }
  public set tokenExpiry(value: number) {
    this._tokenExpiry = value;
  }

  public get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }
  public set isLoggedIn(value: boolean) {
    this._isLoggedIn = value;
  }

  public get givenName(): String {
    return this._givenName;
  }
  public set givenName(value: String) {
    this._givenName = value;
  }
  
  public get picture(): Blob {
    return this._picture;
  }
  public set picture(value: Blob) {
    this._picture = value;
  }
}
