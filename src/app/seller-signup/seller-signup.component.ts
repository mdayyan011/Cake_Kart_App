import { Component,OnInit } from '@angular/core';
import { Signup } from '../data-type';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-signup',
  templateUrl: './seller-signup.component.html',
  styleUrls: ['./seller-signup.component.css']
})
export class SellerSignupComponent implements OnInit{
  img1='../../assets/images/google.png'
  img2='../../assets/images/linkedin.png'
  img3='../../assets/images/facebook.png'
  constructor(private seller:SellerService){}
  ngOnInit(): void {
    
  }
  signUp(data:Signup):void{
    this.seller.sellerSignup(data)
  }
}
