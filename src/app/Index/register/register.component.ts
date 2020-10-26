import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {AppService} from '../../app.service';
import { Register} from './register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerData: Register = {
    firstname: '',
    lastname : '',
    phone: '',
    email: '',
    password: '',
  };

  constructor(public appService: AppService, public router: Router) { }

  ngOnInit(): void {
  }

  register(){
    const data = {
      firstname: this.registerData.firstname,
      lastname:  this.registerData.lastname,
      email: this.registerData.email,
      phone: this.registerData.phone,
      password: this.registerData.password
    };
    this.appService.postData(`signup`, data).subscribe((res: any) => {
      if (res.success){
        this.router.navigateByUrl('/login')
      }
    });
  }

}
