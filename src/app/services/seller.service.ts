import { Injectable } from '@angular/core';
import { Signup } from '../data-type';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http:HttpClient,private router: Router) { }

sellerSignup(seller:Signup){
this.http.post('http://localhost:3000/seller',seller,{observe:'response'}).subscribe((result)=>{ 
  console.log(result)
  if(result){
    localStorage.setItem('seller',JSON.stringify(result.body))
   this.router.navigate(['/'])
  }
})
  }
}
