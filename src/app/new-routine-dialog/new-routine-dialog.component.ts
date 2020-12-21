import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppDataService } from '../services/app-data.service';

@Component({
  selector: 'app-new-routine-dialog',
  templateUrl: './new-routine-dialog.component.html',
  styleUrls: ['./new-routine-dialog.component.css']
})
export class NewRoutineDialogComponent implements OnInit {

  constructor(private router: Router, public appData: AppDataService, private dialogRef: MatDialogRef<NewRoutineDialogComponent>) { }

  ngOnInit(): void {
    
  }

  closeDialog(){
    this.dialogRef.close();
  }

  saveDialog(){
    this.dialogRef.close();
    this.appData.isCreatingNewRoutine = true;
    this.router.navigateByUrl("/track/new");
  }

  get workout_id(){
    return this.appData.newRoutineForm.get('workout_id');
  }
}
