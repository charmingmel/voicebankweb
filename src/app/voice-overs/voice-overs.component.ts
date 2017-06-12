import { Component, OnInit } from '@angular/core';

// export class Voice {
//   id: number;
//   name: string;
//   categories: Array<string>;
//   likes: string;
// }

@Component({
  selector: 'vob-voice-overs',
  templateUrl: './voice-overs.component.html',
  styleUrls: ['./voice-overs.component.css']
})
export class VoiceOversComponent implements OnInit {
  public voices = [
    {id: 0, name: 'Pemi', likes: '3.2k', categories: 'teens'},
    {id: 1, name: 'Shobo', likes: '2.1k', categories: 'male'},
    {id: 2, name: 'Abiodun', likes: '9.9k', categories: 'teens, female'},
    {id: 3, name: 'Chris', likes: '1.1k', categories: 'teens, male'},
    {id: 4, name: 'Suraj', likes: '37', categories: 'male'},
    {id: 5, name: 'Vicky', likes: '99', categories: 'female'},
    {id: 0, name: 'Pemi', likes: '3.2k', categories: 'teens'},
    {id: 1, name: 'Shobo', likes: '2.1k', categories: 'male'},
    {id: 2, name: 'Abiodun', likes: '9.9k', categories: 'teens, female'},
    {id: 3, name: 'Chris', likes: '1.1k', categories: 'teens, male'},
    {id: 4, name: 'Suraj', likes: '37', categories: 'male'},
    {id: 5, name: 'Vicky', likes: '99', categories: 'female'},
    {id: 0, name: 'Pemi', likes: '3.2k', categories: 'teens'},
    {id: 1, name: 'Shobo', likes: '2.1k', categories: 'male'},
    {id: 2, name: 'Abiodun', likes: '9.9k', categories: 'teens, female'},
    {id: 3, name: 'Chris', likes: '1.1k', categories: 'teens, male'},
    {id: 4, name: 'Suraj', likes: '37', categories: 'male'},
    {id: 5, name: 'Vicky', likes: '99', categories: 'female'},
  ];

  // voices = [{}]
  constructor() { }

  ngOnInit() {
  }



}
