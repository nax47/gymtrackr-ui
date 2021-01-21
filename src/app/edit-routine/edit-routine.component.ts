import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DeleteRoutineDialogComponent } from '../delete-routine-dialog/delete-routine-dialog.component';
import { EditExerciseDialogComponent } from '../edit-exercise-dialog/edit-exercise-dialog.component';
import { AppDataService } from '../services/app-data.service';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-edit-routine',
  templateUrl: './edit-routine.component.html',
  styleUrls: ['./edit-routine.component.css']
})
export class EditRoutineComponent implements OnInit {

  columnNames: string[] = ['name', 'weight'];

  constructor(private router: Router, public appData: AppDataService, private backendService: BackendService, private formBuilder: FormBuilder, private dialog: MatDialog) { }

  ngOnInit(): void {
    if(!this.appData.isLoggedIn) { this.router.navigateByUrl("");}
    if(!this.appData.isEditingRoutine) { this.router.navigateByUrl("/track");}
    this.appData.exerciseList = [];
  }

  exerciseClick(exercise: any, index: number): void{
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      name: exercise.name,
      weight: exercise.weight,
      position: index
  };

    this.dialog.open(EditExerciseDialogComponent, dialogConfig);
  }

  backClick(exercise: any): void{
    this.appData.isEditingRoutine = false;
    this.router.navigateByUrl("/track");
  }

  deleteClick(exercise: any): void{
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(DeleteRoutineDialogComponent, dialogConfig);
  }

}
