import { AppService } from './../../Services/app.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {


    @ViewChild('scanner')
    scanner: ZXingScannerComponent;

    hasCameras = false;
    hasPermission: boolean;
    qrResultString: string;

    availableDevices: MediaDeviceInfo[];
    selectedDevice: MediaDeviceInfo;

  scannerEnabled: boolean = false;
  barcode: boolean = false;
  amount:number = null;
  user = JSON.parse(localStorage.getItem('User'));
  dataToString:any;

  constructor(private appService:AppService) { }

  ngOnInit(): void {
  }

  handleQrCodeResult(resultString: string) {
    console.log('Result: ', resultString);
    this.qrResultString = resultString;
}



  generateBarcode(){
    const Data = {
      to: this.user.id,
      amount: this.amount
    };
    this.dataToString = JSON.stringify(Data);
    console.log(Data);
    this.barcode = true;
  }

  stopBarcode(){
    this.barcode = false;
  }

  enableScanner() {
    this.scannerEnabled = true;
  }

  disableScanner(){
    this.scannerEnabled = false;
  }

  scanSuccessHandler($event:any){
    this.scannerEnabled = false;
    console.log($event);
    alert($event);
    this.appService.payment('', $event).subscribe((data:any) =>{
      alert("Success");
    });

  }


  ELEMENT_DATA: Post[] = [
    {position: 0, title: 'Post One', category: 'Web Development', date_posted: new Date(), body: 'Body 1'},
    {position: 1, title: 'Post Two', category: 'Android Development', date_posted: new Date(), body: 'Body 2'},
    {position: 2, title: 'Post Three', category: 'IOS Development', date_posted: new Date(), body: 'Body 3'},
    {position: 3, title: 'Post Four', category: 'Android Development', date_posted: new Date(), body: 'Body 4'},
    {position: 4, title: 'Post Five', category: 'IOS Development', date_posted: new Date(), body: 'Body 5'},
    {position: 5, title: 'Post Six', category: 'Web Development', date_posted: new Date(), body: 'Body 6'},
  ];
  categories = [
    {value: 'Web-Development', viewValue: 'Web Development'},
    {value: 'Android-Development', viewValue: 'Android Development'},
    {value: 'IOS-Development', viewValue: 'IOS Development'}
  ];



}


export interface Post {
  title: string;
  category: string;
  date_posted: Date;
  position: number;
  body: string;
}
