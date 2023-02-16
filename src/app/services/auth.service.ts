import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { allUserApi, allUserRes } from '../Interface';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseurl = "http://localhost/snigdh_ci4/api";
  constructor(private http: HttpClient) { }
  getToken=()=>{
    let userLogged = localStorage.getItem("Session") as string;
    let token=JSON.parse(userLogged).authorization;
    if(token)  
      return token;  
    else
      return "NULL";
  }

  login(data: any) {
    return this.http.post<any>(this.baseurl + '/login', data)
  }
  signUp(data: any) {
    return this.http.post<any>(this.baseurl + '/signup', data)
  }
  allRegisterUser(page:number,record:number) {
    return this.http.get<allUserApi>(this.baseurl+`/allusers?page=${page}&recordlimit=${record}`,{headers:{
      'Authorization': this.getToken()}})
  }
}
