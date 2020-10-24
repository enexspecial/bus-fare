import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class DashboardHeaderComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }


  onToggleSidenav(){
    this.sidenavToggle.emit();
  }


}
