import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule} from '@angular/material/icon';
import { MatInputModule} from '@angular/material/input';
import { MatDividerModule} from '@angular/material/divider';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatListModule} from '@angular/material/list';
import { MatTableModule} from '@angular/material/table';
import { MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule} from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { CallbackComponent } from './callback/callback.component';
import { HttpClientModule } from '@angular/common/http';
import { NewRoutineDialogComponent } from './new-routine-dialog/new-routine-dialog.component';
import { NewRoutineComponent } from './new-routine/new-routine.component';
import { EditRoutineComponent } from './edit-routine/edit-routine.component';
import { DeleteRoutineDialogComponent } from './delete-routine-dialog/delete-routine-dialog.component';
import { EditExerciseDialogComponent } from './edit-exercise-dialog/edit-exercise-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    CallbackComponent,
    NewRoutineDialogComponent,
    NewRoutineComponent,
    EditRoutineComponent,
    DeleteRoutineDialogComponent,
    EditExerciseDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatCheckboxModule,
    MatListModule,
    MatDividerModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NewRoutineDialogComponent]
})
export class AppModule { }
