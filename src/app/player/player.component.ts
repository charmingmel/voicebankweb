import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import 'howler';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})

export class PlayerComponent implements OnInit {
  @Input() source: any;
  private player: any;
  private playerConfig: any;
  public progress = '0%';
  public playing: boolean = false;
  @Output() playerClick = new EventEmitter();

  ngOnInit() {
    this.playerConfig = {
      src: [this.source],
      volume: 0.5,
      onplay: () => {
        this.playing = true;
        requestAnimationFrame(this.step.bind(this));
      },
      onpause: () => {
        this.playing = false;
      },
      onstop: () => {
        this.playing = false;
        this.progress = "0%";
      }
    }
  }

  seekerClick(event) {
    const pointClicked = event.layerX / event.target.offsetWidth;
    this.progress = "0%";
    this.progress = (pointClicked * 100) + "%";
    this.seek(pointClicked);
  }

  seek(per) {
    var self = this;
    const skipTo = this.player.duration() * per;
    this.player.seek(0);
    this.player.seek(skipTo);
  }

  step() {
    const self = this;
    const seek = self.player.seek() || 0;

    self.progress = (((seek / self.player.duration()) * 100) || 0) + '%';

    if (self.player.playing()) {
      requestAnimationFrame(self.step.bind(self));
    }
  }

  formatTime(secs) {
    const minutes = Math.floor(secs / 60) || 0;
    const seconds = (secs - minutes * 60) || 0;

    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  }

  onClick(event) {
    if(this.player && this.player.seek() === 0) return this.playerClick.emit(this.player);

    if(this.player) return this.player.playing() ? this.player.pause() : this.player.play();

    if(!this.player) { this.playing = true; this.player = new Howl(this.playerConfig) };
    this.playerClick.emit(this.player);
  }
}