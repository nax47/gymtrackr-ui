import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NewRoutineDialogComponent } from '../new-routine-dialog/new-routine-dialog.component';
import { AppDataService } from '../services/app-data.service';
import { BackendService } from '../services/backend.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title = 'GymTrackr';
  private headers: any;

  constructor(private router: Router, public appData: AppDataService, private backendService: BackendService, private formBuilder: FormBuilder, private dialog: MatDialog) { }

  ngOnInit(): void {
    if(!this.appData.isLoggedIn) { this.router.navigateByUrl("");}

    this.appData.routineList = [];
    this.appData.isLoading = true;
    this.backendService.getRoutines(this.appData.email, this.appData.accessToken)
    .subscribe((response) => {
      const keys = response.headers.keys();
      this.headers = keys.map(key =>
          '${key}: ${response.headers.get(key)}');

      if(response.body.Count > 0){
        this.appData.hasRoutines = true;
        for(let item of response.body.Items){
          this.appData.routineList.push(item.workout_id);
        }
      }
      else{
        this.appData.hasRoutines = false;
      }
      this.appData.isLoading = false;
    });
    /////////
  }

  routineClick(routine: string): void{
    this.appData.isLoading = true;

    this.backendService.getRoutine(this.appData.email,routine,this.appData.accessToken)
    .subscribe((response) => {
      const keys = response.headers.keys();
      this.headers = keys.map(key =>
          '${key}: ${response.headers.get(key)}');
      this.appData.currentRoutine = response.body.Item.workout_id;
      this.appData.exerciseList = response.body.Item.exercises;
      this.appData.isLoading = false;
    });
    
    this.router.navigateByUrl("/track/edit");
  }

  openDialog(): void{
    this.buildRoutineForm();

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(NewRoutineDialogComponent, dialogConfig);
  }

  buildRoutineForm(): void{
    this.appData.newRoutineForm = this.formBuilder.group({
      workout_id: ['', [Validators.required]],
      exercises: this.formBuilder.array([], Validators.required)
    })
  }

}
