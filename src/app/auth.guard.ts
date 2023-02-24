import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AppComponent } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router,private appObj:AppComponent){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    let session=localStorage.getItem('Session')
    if(session){
      if(JSON.parse(session).role===route.data['role'])
        { 
          // console.log('logged in')
          return true
        }
      else
        { console.log(route.data['role'])
          console.log("Your Session not Found please logged In ")
          // this.appObj.logout()
          this.router.navigate(['/login'])
          return false
        }
    }
    else{
      console.log("No Session")
      this.router.navigate(['/login'])
      return false;
    }
  }
  
}
   