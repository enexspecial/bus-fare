import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BehaviorSubject, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  URL = 'https://busfare-api.herokuapp.com/';

  constructor(public _http: HttpClient, public router: Router, public snack: MatSnackBar ) { }

  postData(url, data){
    return this._http.post(this.URL + url, data);
  }

  payment(url, data){
    return this._http.post(this.URL + url, data);
  }

}
