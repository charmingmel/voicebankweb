import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vob-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public currentYear: number = new Date().getFullYear();

  constructor() { }

  ngOnInit() {
  }

}