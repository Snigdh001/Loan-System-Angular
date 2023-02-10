import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseurl="http://localhost/snigdh_ci4/api";
  constructor(private http: HttpClient) { }
  
  login(data:any){
    return this.http.post<any>(this.baseurl+'/login',data)
  }
}
