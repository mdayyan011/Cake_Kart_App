import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from'@angular/material/button';
import {MatFormFieldModule} from'@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HammerModule } from '@angular/platform-browser';
import { DetailspageComponent } from './detailspage/detailspage.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserHomeComponent } from './user-home/user-home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserAboutusComponent } from './user-aboutus/user-aboutus.component';
import { UserProductsComponent } from './user-products/user-products.component';
import { UserDodComponent } from './user-dod/user-dod.component';
import { UserContactsComponent } from './user-contacts/user-contacts.component';
import { SellerSigninComponent } from './seller-signin/seller-signin.component';
import { SellerSignupComponent } from './seller-signup/seller-signup.component'; 


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DetailspageComponent,
    SignupComponent,
    SigninComponent,
    UserHomeComponent,
    UserAboutusComponent,
    UserProductsComponent,
    UserDodComponent,
    UserContactsComponent,
    SellerSigninComponent,
    SellerSignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HammerModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
