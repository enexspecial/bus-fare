import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import  'rxjs/add/operator/map'
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class AuthService {
  returnUrl: string;
  constructor(private route: ActivatedRoute, private router:Router) { }

  public getToken(): string {
    return JSON.parse(localStorage.getItem('token'));
  }

  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    // return a boolean reflecting
    // whether or not the token is expired
    return tokenNotExpired(null, token);
  }



 public logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
    this.router.navigate(['/']);
}


}
