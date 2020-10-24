import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './Index/landing/landing.component';
import { DashboardComponent} from './Dashboard/dashboard/dashboard.component';
import { IndexComponent } from './Dashboard/index/index.component';
import { AccountComponent } from './Dashboard/account/account.component';
import { PaymentComponent} from './Dashboard/payment/payment.component';


const routes: Routes = [
<<<<<<< HEAD
<<<<<<< HEAD
  {path: "", pathMatch: "full", component: LandingComponent},
  {path: "dashboard", component: DashboardComponent, children: [
    {path:"account", component: AccountComponent},
    {path:"payment",  component: PaymentComponent},
=======
=======
>>>>>>> refs/remotes/origin/main
  {path: '', pathMatch: 'full', component: LandingComponent},
  {path: 'dashboard', component: DashboardComponent, children: [
    {path: '', pathMatch: 'full', component: IndexComponent},
    {path: 'account', component: AccountComponent},
    {path: 'payment',  component: PaymentComponent},
<<<<<<< HEAD
>>>>>>> 47f89b9963111e708e51780cd6f63aac3386178c
=======
>>>>>>> refs/remotes/origin/main
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
