import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.less']
})
export class ThreeComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const idd = this.activeRoute.snapshot.params.id
    console.log('id--', idd);

  }

}
