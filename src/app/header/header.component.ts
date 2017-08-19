import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'vob-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  constructor() {}
  ngOnInit() {}

  initializeSideNav() {
    console.log($, 'jquery');
    $('.button-collapse').sideNav();
  }
}

