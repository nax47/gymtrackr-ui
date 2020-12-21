import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppDataService } from '../services/app-data.service';

@Component({
  selector: 'app-new-routine',
  templateUrl: './new-routine.component.html',
  styleUrls: ['./new-routine.component.css']
})
export class NewRoutineComponent implements OnInit {

  constructor(private router: Router, public appData: AppDataService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    if(!this.appData.isCreatingNewRoutine) { this.router.navigateByUrl("/track");}
  }

  get exerciseArray() {
    return this.appData.newRoutineForm.get('exercises') as FormArray;
  }

  addExercise() {
    const exercise = this.formBuilder.group({
      name: ['', [Validators.required]],
      weight: [null, [Validators.required,Validators.min(0)]]

    })
    this.exerciseArray.push(exercise);
  }

  deleteExercise(i: number){
    this.exerciseArray.removeAt(i);
  }

}
