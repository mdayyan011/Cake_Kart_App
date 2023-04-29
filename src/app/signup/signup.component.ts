import { Component, OnInit} from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import {Router} from '@angular/router';
import { Signup } from '../data-type';
//import {FormControl,FormGroup,FormControlName} from '@angular/forms'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  img1='../../assets/images/google.png'
  img2='../../assets/images/linkedin.png'
  img3='../../assets/images/facebook.png'

  constructor(private user:UserServiceService,private router:Router){}

  ngOnInit(): void {
    this.user.reloadUser()
  }
  
  signup(data:Signup):void{
    
    this.user.userSignUp(data)
    
  }
}
