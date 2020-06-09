import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-com',
  templateUrl: './first-com.component.html',
  styleUrls: ['./first-com.component.less']
})
export class FirstComComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }
  clickFn() {
    // this.router.
    window.history.back()
  }

}
