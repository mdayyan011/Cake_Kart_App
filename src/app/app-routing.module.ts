import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAboutusComponent } from './user-aboutus/user-aboutus.component'; 
import { UserContactsComponent } from './user-contacts/user-contacts.component';
import { UserDodComponent } from './user-dod/user-dod.component'; 
import { HomeComponent } from './home/home.component';
import { UserProductsComponent } from './user-products/user-products.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { AuthGuard } from './auth.guard';
import { SellerSigninComponent } from './seller-signin/seller-signin.component'; 
import { SellerSignupComponent } from './seller-signup/seller-signup.component';
import { UserProductDetailsComponent } from './user-product-details/user-product-details.component'; 



const routes: Routes = [{
  path:'',
  component:HomeComponent
  
},
{
  path:'user-aboutus',
  component:UserAboutusComponent
},
{
  path:'user-contacts',
  component:UserContactsComponent
},
{
  path:'user-dod',
  component:UserDodComponent
},
{
  path:'user-products',
  component: UserProductsComponent
},
{
  path:'signup',
  component: SignupComponent
},
{
  path:"signin",
  component: SigninComponent
},
{
  path:"user-home",
  component: UserHomeComponent,
  canActivate:[AuthGuard]
},
{
  path:"seller-signin",
  component:SellerSigninComponent
},
{
  path:"seller-signup",
  component:SellerSignupComponent
},
{
  path:"user-product_details",
  component:UserProductDetailsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
