import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-aboutus',
  templateUrl: './user-aboutus.component.html',
  styleUrls: ['./user-aboutus.component.css']
})
export class UserAboutusComponent {
  gif2 ='../../assets/images/delivery-guy.gif'
  constructor(private router:Router){}

  opendod(){
    this.router.navigate(['/user-dod']);
  }
  openproducts(){
    this.router.navigate(['/user-products']);
  }
}
