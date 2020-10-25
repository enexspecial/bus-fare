import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  amount:number = null;
  data = {
    'from': 'John',
    'to': 'Kefas',
    'amount': 100
  };


  dataToString = JSON.stringify(this.data);

  constructor() { }

  ngOnInit(): void {
  }

  


}
