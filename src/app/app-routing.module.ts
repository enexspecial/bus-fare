import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './Index/landing/landing.component';
import { DashboardComponent} from './Dashboard/dashboard/dashboard.component';
import { AccountComponent } from './Dashboard/account/account.component';
import { PaymentComponent} from './Dashboard/payment/payment.component';


const routes: Routes = [
  {path: "", pathMatch: "full", component: LandingComponent},
  {path: "dashboard", component: DashboardComponent, children: [
    {path:"", pathMatch: 'full', component: AccountComponent},
    {path:"payment",  component: PaymentComponent},
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
