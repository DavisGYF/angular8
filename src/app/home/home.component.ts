import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {

  constructor(
    private router: Router
  ) {

  }


  clickFn(param) {
    console.log(111, this.router);
    if (param === 1) {
      return this.router.navigateByUrl('second/sec')
    }
    if (param === 2) {
      return this.router.navigateByUrl('three/1')
    }

    this.router.navigateByUrl('first')

  }
}
