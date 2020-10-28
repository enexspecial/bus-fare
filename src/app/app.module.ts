import { AuthGuard } from './Auth/authGuard';
import { AuthService } from './Auth/auth.service';
import { MatTableModule } from '@angular/material/table';
import { QRCodeModule } from 'angular2-qrcode';
import { SidenavListComponent } from './Dashboard/sidenav-list/sidenav-list.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
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
import { DashComponent } from './Dashboard/dash/dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TokenInterceptor } from './Auth/token.interceptor';
import { AppService } from './Services/app.service';



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
    SidenavListComponent,
    IndexComponent,
    DashComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CustomComponentModules,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    LayoutModule,
    QRCodeModule,
    FlexLayoutModule
  ],
  providers: [
    AppService,
    AuthService,
    AuthGuard,
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
