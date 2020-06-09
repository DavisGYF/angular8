import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  isCollapsed = false;
  constructor(
    private router: Router
  ) {

  }
  clickFn(param) {
    // console.log(111, this.router);
    if (param === 1) {
      return this.router.navigateByUrl('second')
    }
    if (param === 2) {
      return this.router.navigateByUrl('three')
    }

    this.router.navigateByUrl('first')

  }
}
