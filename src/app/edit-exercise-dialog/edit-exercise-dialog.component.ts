import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Item } from '../models/item';
import { RefreshAuthService } from '../services/refresh-auth.service';
import { AppDataService } from '../services/app-data.service';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-edit-exercise-dialog',
  templateUrl: './edit-exercise-dialog.component.html',
  styleUrls: ['./edit-exercise-dialog.component.css']
})
export class EditExerciseDialogComponent implements OnInit {

  name: string;
  weight: number;
  position: number;
  exerciseWeightForm: FormGroup;

  constructor(public appData: AppDataService, private backendService: BackendService, private refreshAuthService: RefreshAuthService, private formBuilder: FormBuilder, private dialogRef: MatDialogRef<EditExerciseDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.name = data.name;
    this.weight = data.weight;
    this.position = data.position;
   }

  ngOnInit(): void {
    this.exerciseWeightForm = this.formBuilder.group({
      weight: [this.weight, [Validators.required,Validators.min(0)]]
    })
  }

  closeDialog(){
    this.dialogRef.close();
  }

  saveRoutine(){
    this.appData.exerciseList[this.position].weight = this.editedWeight.value;
    const item: Item = {
      workout_id: this.appData.currentRoutine,
      email_id: this.appData.email,
      exercises: this.appData.exerciseList
    }

    this.backendService.createRoutine(item, this.appData.accessToken)
    .subscribe((
      response) => {
        this.dialogRef.close();
      },
      (error) => {
        console.log(error.status);
        if(error.status == 401){
          this.refreshAuthService.refreshToken();
          this.saveRoutine();
        }
      }
    );
  }

  get editedWeight(){
    return this.exerciseWeightForm.get('weight');
  }

}
