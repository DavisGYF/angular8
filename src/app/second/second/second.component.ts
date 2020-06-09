import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.less']
})
export class SecondComponent implements OnInit {


  title = 'demo1';
  jsMyselft = '输入法来一个'

  constructor(
    private router: Router
  ) {

  }


  ngOnInit() {

  }


  clickFn(param) {
    console.log(111, this.router);
    if (param) {
      return this.router.navigateByUrl('home')
    }

    this.router.navigateByUrl('first')

  }

}
