import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AppService } from '../../app.service';
import { Login } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginData: Login = {
    email: '',
    password: ''
  };

  constructor(private router: Router, public appservice: AppService) { }

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

    this.appservice.postData(`login`, Data).subscribe((res: any) => {
      console.log(res.data);
      const holdData = [];
      if (res.success){
        localStorage.setItem('data', JSON.stringify(res.data));
        this.router.navigate(['/dashboard']);
      }
    });
  }

}
