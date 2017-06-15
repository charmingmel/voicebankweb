import { Component, OnInit } from '@angular/core';

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
    {id: 4, name: 'Femi', likes: '307', categories: 'male'},
    {id: 5, name: 'Dupe', likes: '899', categories: 'female'},
    {id: 6, name: 'Akinbunyerin', likes: '0.2k', categories: 'teens'},
    {id: 7, name: 'Francis', likes: '2.1k', categories: 'male'},
    {id: 8, name: 'Ayo', likes: '9.9k', categories: 'teens, female'},
    {id: 9, name: 'Emmanuel', likes: '1.1k', categories: 'teens, male'},
    {id: 10, name: 'John', likes: '37', categories: 'male'},
    {id: 11, name: 'Bukky', likes: '99', categories: 'female'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
