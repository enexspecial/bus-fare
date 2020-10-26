import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
     return [
        {
          title: 'Card 2',
          body: `Card Content Here 2`,
          cols: 1,
          rows: 1
        },
        {
          title: 'Card 3',
          body: `Card Content Here 3`,
          cols: 1,
          rows: 1
        },

      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
