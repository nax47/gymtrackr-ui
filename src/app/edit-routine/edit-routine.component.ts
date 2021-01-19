import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
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
    this.appData.exerciseList = [];
  }

  exerciseClick(exercise: any): void{
    console.log (exercise);
  }

  backClick(exercise: any): void{
    this.router.navigateByUrl("/track");
  }

  deleteClick(exercise: any): void{
    
  }

}
