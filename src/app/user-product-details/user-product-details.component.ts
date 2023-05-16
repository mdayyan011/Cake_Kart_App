import { Component } from '@angular/core';

@Component({
  selector: 'app-user-product-details',
  templateUrl: './user-product-details.component.html',
  styleUrls: ['./user-product-details.component.css']
})
export class UserProductDetailsComponent {
  prod = '../../assets/images/cup2.png'
  count = 0;
  counter(data:String){
    data === 'add' ? this.count++ : this.count;
    if(this.count!=0){
    data ==='minus' ? this.count-- : this.count;
    }
  }
}
