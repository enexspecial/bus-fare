<<<<<<< HEAD
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
=======
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnInit, OnDestroy} from '@angular/core';
>>>>>>> refs/remotes/origin/main

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
<<<<<<< HEAD

export class DashboardHeaderComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter();
  constructor() { }
=======
export class DashboardHeaderComponent implements OnInit, OnDestroy {

  


  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) { 

  }
  ngOnDestroy(): void {
    
  }
>>>>>>> refs/remotes/origin/main

  ngOnInit(): void {
  }

<<<<<<< HEAD

  onToggleSidenav(){
    this.sidenavToggle.emit();
  }


=======
  
>>>>>>> refs/remotes/origin/main
}
