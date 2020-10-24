import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { AppService } from './app.service';
import {CustomComponentModules} from '../app/custom-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Index/login/login.component';
import { RegisterComponent } from './Index/register/register.component';
import { LandingComponent } from './Index/landing/landing.component';
import { HeaderComponent } from './Layout/header/header.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { DashboardComponent} from './Dashboard/dashboard/dashboard.component';
import { DashboardHeaderComponent } from './Dashboard/header/header.component';
import { DashboardSidemenuComponent } from './Dashboard/sidemenu/sidemenu.component';
import { DashboardFooterComponent } from './Dashboard/footer/footer.component';
import { AccountComponent } from './Dashboard/account/account.component';
import { PaymentComponent} from './Dashboard/payment/payment.component';
import { IndexComponent } from './Dashboard/index/index.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LandingComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    DashboardHeaderComponent,
    DashboardSidemenuComponent,
    DashboardFooterComponent,
    AccountComponent,
    PaymentComponent,
    IndexComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomComponentModules,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [
    AppService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
