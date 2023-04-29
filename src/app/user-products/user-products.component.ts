import { Component } from '@angular/core';

@Component({
  selector: 'app-user-products',
  templateUrl: './user-products.component.html',
  styleUrls: ['./user-products.component.css']
})
export class UserProductsComponent {
  img = '../../assets/images/cup2.png'

  prod_list = [
    {id:1,pname:'PISTA CRUSHED CAKE',price:'RS 250',offerprice:'RS 200'},
    {id:2,pname:'STAWBERRILICIOUS CAKE',price:'RS 250',offerprice:'RS 200'},
    {id:3,pname:'LEMON BLOOM CAKE',price:'RS 250',offerprice:'RS 200'},
    {id:1,pname:'PISTA CRUSHED CAKE',price:'RS 250',offerprice:'RS 200'},
    {id:2,pname:'STAWBERRILICIOUS CAKE',price:'RS 250',offerprice:'RS 200'},
    {id:3,pname:'LEMON BLOOM CAKE',price:'RS 250',offerprice:'RS 200'}
  ]
  
}
