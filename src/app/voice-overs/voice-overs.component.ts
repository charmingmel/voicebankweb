import { Component, OnInit } from '@angular/core';
import 'howler';

@Component({
  selector: 'vob-voice-overs',
  templateUrl: './voice-overs.component.html',
  styleUrls: ['./voice-overs.component.css']
})
export class VoiceOversComponent implements OnInit {
  private currentlyPlaying;
  public showPlayBtn;
  public previouslyPlayed;
  public sound;

  public isPlaying = true;
  public progress = '0%';

  public voices = [
    {id: 0, name: 'Pemi', likes: '3.2k', categories: 'teens', source: '/assets/sounds/voice_sample_0.m4a'},
    {id: 1, name: 'Shobo', likes: '2.1k', categories: 'male', source: '/assets/sounds/voice_sample_1.mp3'},
    {id: 2, name: 'Abiodun', likes: '9.9k', categories: 'teens, female', source: '/assets/sounds/voice_sample_2.mp3'},
    {id: 3, name: 'Chris', likes: '1.1k', categories: 'teens, male', source: '/assets/sounds/voice_sample_3.opus'},
    {id: 4, name: 'Femi', likes: '307', categories: 'male', source: '/assets/sounds/voice_sample_0.m4a'},
    {id: 5, name: 'Dupe', likes: '899', categories: 'female', source: '/assets/sounds/voice_sample_1.mp3'},
    {id: 6, name: 'Akinbunyerin', likes: '0.2k', categories: 'teens', source: '/assets/sounds/voice_sample_2.mp3'},
    {id: 7, name: 'Francis', likes: '2.1k', categories: 'male', source: '/assets/sounds/voice_sample_3.opus'},
    {id: 8, name: 'Ayo', likes: '9.9k', categories: 'teens, female', source: '/assets/sounds/voice_sample_1.mp3'},
    {id: 9, name: 'Emmanuel', likes: '1.1k', categories: 'teens, male', source: '/assets/sounds/voice_sample_2.mp3'},
    {id: 10, name: 'John', likes: '37', categories: 'male', source: '/assets/sounds/voice_sample_3.opus'},
    {id: 11, name: 'Bukky', likes: '99', categories: 'female', source: '/assets/sounds/voice_sample_0.m4a'}
  ];

  constructor() { }

  ngOnInit() {}

  playVoice(player) {
    if (this.currentlyPlaying) {
      this.currentlyPlaying.pause();
      // console.log('in currently playing pV', this.currentlyPlaying === player);
      if (this.currentlyPlaying !== player) {
        this.previouslyPlayed = this.currentlyPlaying;
        this.showPlayBtn = this.previouslyPlayed.playing();
        // console.log(this.showPlayBtn,'showBtn');
      }
    }
    this.currentlyPlaying = player;
    this.currentlyPlaying.play();
  }

  pauseVoice(player) {
    player.pause();
  }

  seekerClick(event) {
    const pointClicked = event.layerX / event.target.offsetWidth;
    this.progress = '0%';
    this.progress = (pointClicked * 100) + '%';
    this.seek(pointClicked);
  }

  seek(per) {
    const skipTo = this.sound.duration() * per;
    this.sound.seek(skipTo);
  }

  step() {
    const self = this;
    const seek = self.sound.seek() || 0;

    self.progress = (((seek / self.sound.duration()) * 100) || 0) + '%';

    if (self.sound.playing()) {
      requestAnimationFrame(self.step.bind(self));
    }
  }

  formatTime(secs) {
    const minutes = Math.floor(secs / 60) || 0;
    const seconds = (secs - minutes * 60) || 0;

    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  }

}
