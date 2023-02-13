import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { NotFoundError } from 'rxjs';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  {
    component:SignupComponent,
    canActivate:[AuthGuard],
    path:'signup',
  },
  {
    component:LoginComponent,
    path:'login'
  },
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full' 
  },
  {
    component:NotfoundComponent,
    path:'**',
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
