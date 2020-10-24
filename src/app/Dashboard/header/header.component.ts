import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class DashboardHeaderComponent implements OnInit, OnDestroy {

  


  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) { 

  }
  ngOnDestroy(): void {
    
  }

  ngOnInit(): void {
  }

  
}
