import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import { AuthService } from 'src/app/Auth/auth.service';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class DashboardHeaderComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter();
  constructor(private auth: AuthService) { }


  ngOnInit(): void {


  }

  isAuthenticated() {
    this.auth.isAuthenticated();
  }

  logout(){
    this.auth.logout();
  }

  onToggleSidenav(){
    this.sidenavToggle.emit();
  }


}
