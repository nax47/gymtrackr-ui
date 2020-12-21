import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  private _accessToken: string;
  private _refreshToken: string;
  private _tokenExpiry: number;

  private _isLoggedIn: boolean;
  private _givenName: string;
  private _picture: Blob;
  private _email: string;

  private _isLoading: boolean;
  private _hasRoutines: boolean;
  private _routineList: string[];

  private _newRoutineForm: FormGroup;
  private _isCreatingNewRoutine: boolean;

  constructor() { }

  public get accessToken(): string {
    return this._accessToken;
  }
  public set accessToken(value: string) {
    this._accessToken = value;
  }

  public get refreshToken(): string {
    return this._refreshToken;
  }
  public set refreshToken(value: string) {
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

  public get givenName(): string {
    return this._givenName;
  }
  public set givenName(value: string) {
    this._givenName = value;
  }
  
  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }

  public get picture(): Blob {
    return this._picture;
  }
  public set picture(value: Blob) {
    this._picture = value;
  }

  public get isLoading(): boolean {
    return this._isLoading;
  }
  public set isLoading(value: boolean) {
    this._isLoading = value;
  }

  public get hasRoutines(): boolean {
    return this._hasRoutines;
  }
  public set hasRoutines(value: boolean) {
    this._hasRoutines = value;
  }

  public get routineList(): string[] {
    return this._routineList;
  }
  public set routineList(value: string[]) {
    this._routineList = value;
  }

  public get newRoutineForm(): FormGroup {
    return this._newRoutineForm;
  }
  public set newRoutineForm(value: FormGroup) {
    this._newRoutineForm = value;
  }
  
  public get isCreatingNewRoutine(): boolean {
    return this._isCreatingNewRoutine;
  }
  public set isCreatingNewRoutine(value: boolean) {
    this._isCreatingNewRoutine = value;
  }
}
