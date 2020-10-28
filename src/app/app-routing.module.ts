import { AuthGuard } from './Auth/authGuard';
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './Index/landing/landing.component';
import { DashboardComponent} from './Dashboard/dashboard/dashboard.component';
import { IndexComponent } from './Dashboard/index/index.component';
import { AccountComponent } from './Dashboard/account/account.component';
import { PaymentComponent} from './Dashboard/payment/payment.component';
import {LoginComponent} from './Index/login/login.component';
import { DashComponent } from './Dashboard/dash/dash.component';



const routes: Routes = [
  {path: '', pathMatch: 'full', component: LandingComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
  children: [
    {path: 'account', component: AccountComponent, canActivateChild: [AuthGuard]},
    {path: 'payment',  component: PaymentComponent, canActivateChild: [AuthGuard]},
    {path: 'dash',  component: DashComponent, canActivateChild: [AuthGuard]},
  ]
 }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
