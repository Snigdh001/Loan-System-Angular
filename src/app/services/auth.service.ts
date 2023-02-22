import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { allApplicationApi, allUserApi, allUserRes } from '../Interface';
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
  search(page:number=1,record:number=10,key:string) {
    return this.http.get<allUserApi>(this.baseurl+`/search?page=${page}&recordlimit=${record}&keyWord=${key}`)
  }
  searchApplcation(page:number=1,record:number=5,key:string='') {
    return this.http.get<allApplicationApi>(this.baseurl+`/searchApplication?page=${page}&recordlimit=${record}&keyWord=${key}`)
  }
   updateStatus(data:any) {
    return  this.http.post<any>(this.baseurl+`/loanAction`,data)
  }
  deleteUser(id:any=null) {
    return  this.http.delete<any>(this.baseurl+`/deleteuser/${id}`)
  }
  ApplyLoan(data:JSON) {
    return  this.http.post<any>(this.baseurl+'/loanapply',data)
  }
  LoanApplicationById(userId:string) {
    return  this.http.get<[]>(this.baseurl+`/allApplicationById?userId=${userId}`)
  }
}
