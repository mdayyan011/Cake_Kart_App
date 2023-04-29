import { Component,OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import {Router} from '@angular/router';
import { Signin } from '../data-type';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{
img1='../../assets/images/google.png'
img2='../../assets/images/linkedin.png'
img3='../../assets/images/facebook.png'
authError = ' ';
constructor(private user: UserServiceService){}
ngOnInit(): void {
  this.user.reloadUser()
}
signin(data:Signin):void{
  //console.log(data);
  this.user.userSignIn(data)
  this.user.isLoginError.subscribe((isError)=>{
   if(isError){
    this.authError = "Email or Password is not valid";
   }
  })
}
}
