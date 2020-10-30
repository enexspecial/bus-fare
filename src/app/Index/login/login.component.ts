import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AppService } from 'src/app/Services/app.service';
import { Login } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  invalidLogin = false;
  loginData: Login = {
    email: '',
    password: ''
  };

  constructor(private router: Router, public appservice: AppService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
  }

  loadToDashboard(){
    this.router.navigate(['/dashboard']);
  }

  loginUser(){
    const Data = {
      email: this.loginData.email,
      password: this.loginData.password
    };

    this.appservice.postData(`login`, Data).subscribe((res:any) => {
      localStorage.setItem('token', JSON.stringify(res.data.token));
      localStorage.setItem('User', JSON.stringify(res.data));
      let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
      this.router.navigate([returnUrl || '/dashboard/dash']);
    }, error => {
      this.invalidLogin = true;
    });
  }

}
