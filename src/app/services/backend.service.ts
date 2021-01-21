import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import config from '../../assets/config.json'
import { GetRoutinesResponse } from '../models/get-routines-response';
import { Item } from '../models/item';
import { GetRoutineResponse } from '../models/get-routine-response';
import { CreateRoutineResponse } from '../models/create-routine-response';
import { DeleteRoutineResponse } from '../delete-routine-response';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  getRoutines(emailId: string, accessToken: string): Observable<HttpResponse<GetRoutinesResponse>>{
    return this.http.get<GetRoutinesResponse>(config.apiGatewayURL+'routines', 
      {headers: new HttpHeaders()
                    .set('Authorization', 'Bearer '+accessToken),
        params: new HttpParams()
                    .set('id', btoa(emailId)),
        observe: 'response'});
  }

  getRoutine(emailId: string, workoutId: string, accessToken: string): Observable<HttpResponse<GetRoutineResponse>>{
    return this.http.get<GetRoutineResponse>(config.apiGatewayURL+'routine', 
      {headers: new HttpHeaders()
                    .set('Authorization', 'Bearer '+accessToken),
        params: new HttpParams()
                    .set('id', btoa(emailId))
                    .set('workout', btoa(workoutId)),
        observe: 'response'});
  }

  createRoutine(item: Item, accessToken: string): Observable<HttpResponse<CreateRoutineResponse>>{
    return this.http.post<CreateRoutineResponse>(config.apiGatewayURL+'routine', JSON.stringify(item),
      {headers: new HttpHeaders()
                    .set('Authorization', 'Bearer '+accessToken),
        observe: 'response'});
  }
  
  deleteRoutine(emailId: string, workoutId: string, accessToken: string): Observable<HttpResponse<DeleteRoutineResponse>>{
    return this.http.delete<DeleteRoutineResponse>(config.apiGatewayURL+'routine', 
      {headers: new HttpHeaders()
                    .set('Authorization', 'Bearer '+accessToken),
        params: new HttpParams()
                    .set('id', btoa(emailId))
                    .set('workout', btoa(workoutId)),
        observe: 'response'});
  }
}
