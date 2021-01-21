import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExerciseList } from '../exercise-list';
import { Item } from '../models/item';
import { RefreshAuthService } from '../refresh-auth.service';
import { AppDataService } from '../services/app-data.service';
import { BackendService } from '../services/backend.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-new-routine',
  templateUrl: './new-routine.component.html',
  styleUrls: ['./new-routine.component.css']
})
export class NewRoutineComponent implements OnInit {

  constructor(private router: Router, public appData: AppDataService, private refreshAuthService: RefreshAuthService, private formBuilder: FormBuilder, private backendService: BackendService) { }

  ngOnInit(): void {
    if(!this.appData.isLoggedIn) { this.router.navigateByUrl("");}
    if(!this.appData.isCreatingNewRoutine) { this.router.navigateByUrl("/track");}
  }

  get exerciseArray() {
    return this.appData.newRoutineForm.get('exercises') as FormArray;
  }

  addExercise(): void{
    const exercise = this.formBuilder.group({
      name: ['', [Validators.required]]
      //weight: [null, [Validators.required,Validators.min(0)]]

    })
    this.exerciseArray.push(exercise);
  }

  deleteExercise(i: number): void{
    this.exerciseArray.removeAt(i);
  }

  createRoutine(){
    const exerciseList = this.appData.newRoutineForm.get('exercises').value;
    var exerciseArr = [];
    exerciseList.forEach(exercise => exerciseArr.push({name: exercise.name, weight: 0}));
      //exerciseObj[exercise.name] = 0);
    const item: Item = {
      workout_id: this.appData.newRoutineForm.get('workout_id').value,
      email_id: this.appData.email,
      exercises: exerciseArr
    }
    this.backendService.createRoutine(item, this.appData.accessToken)
    .subscribe(
      (response) => {
        this.appData.isCreatingNewRoutine = false;
        this.router.navigateByUrl("/track");
      },
      (error) => {
        console.log(error.status);
        if(error.status == 401){
          this.refreshAuthService.refreshToken();
          this.createRoutine();
        }
      }
    );
  }



}
