import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallbackComponent } from './callback/callback.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { LoginComponent } from './login/login.component'
import { NewRoutineComponent } from './new-routine/new-routine.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'track', component: DashboardComponent},
  {path: 'callback', component: CallbackComponent},
  {path: 'track/new', component: NewRoutineComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 

export class AppRoutingModule { }
