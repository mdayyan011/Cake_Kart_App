import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Signup } from '../data-type';
import { Signin } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import {Router} from'@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
isUserLoggedIn = new BehaviorSubject<boolean>(false)
isLoginError = new EventEmitter<boolean>(false)
constructor(private http: HttpClient,private router:Router) { }
  userSignUp(data: Signup) {
    this.http.post('http://localhost:3000/user', data, { observe: 'response' }).subscribe((result) => {
      this.isUserLoggedIn.next(true);
      localStorage.setItem('user',JSON.stringify(result.body))
      this.router.navigate(['user-home'])
    });
  }
  reloadUser(){
    if(localStorage.getItem('user')){
      this.isUserLoggedIn.next(true);
      this.router.navigate(['user-home'])
    }
  }
  
  userSignIn(data:Signin){
    console.log(data)
    this.http.get(`http://localhost:3000/user?email=${data.email}&password=${data.password}`,{ observe: 'response' }).subscribe((result:any) => {
if(result && result.body && result.body.length){
  console.log("user logged in")
  this.isUserLoggedIn.next(true);
  localStorage.setItem('user',JSON.stringify(result.body))
  this.router.navigate(['user-home'])
}  
else{
  console.log("loginfailed")
  this.isLoginError.emit(true)
}   
    });
  }
}
