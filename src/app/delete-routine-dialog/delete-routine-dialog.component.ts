import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RefreshAuthService } from '../services/refresh-auth.service';
import { AppDataService } from '../services/app-data.service';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-delete-routine-dialog',
  templateUrl: './delete-routine-dialog.component.html',
  styleUrls: ['./delete-routine-dialog.component.css']
})
export class DeleteRoutineDialogComponent implements OnInit {

  constructor(private router: Router, public backendService: BackendService, public appData: AppDataService, private refreshAuthService: RefreshAuthService, private dialogRef: MatDialogRef<DeleteRoutineDialogComponent>) { }

  ngOnInit(): void {
  }

  closeDialog(){
    this.dialogRef.close();
  }

  deleteRoutine(){
    this.backendService.deleteRoutine(this.appData.email,this.appData.currentRoutine,this.appData.accessToken)
    .subscribe(
      (response) => {
        this.dialogRef.close();
        this.router.navigateByUrl("/track");
      },
      (error) => {
        console.log(error.status);
        if(error.status == 401){
          this.refreshAuthService.refreshToken();
          this.deleteRoutine();
        }
      }
    );
    
  }
}
