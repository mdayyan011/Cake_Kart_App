import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
   gif = '../../assets/images/shopping-cart.gif';
   type = " "
   userName:string = ''
   constructor(private router:Router){}
ngOnInit(): void {
  this.router.events.subscribe((val:any)=>{
    if(val.url){
      if(localStorage.getItem('user') && val.url.includes('user')){
       this.type = "user"
       if(localStorage.getItem('user')){
        let userStore = localStorage.getItem('user')
        let userData = userStore && JSON.parse(userStore)[0];
        console.log(userData.name)
        this.userName = userData.firstname;
       }
      }
      else{
       this.type = "default"
      }
    }
  })
}
logOut(){
localStorage.removeItem('user')
this.router.navigate(['/signin'])
}
   }

