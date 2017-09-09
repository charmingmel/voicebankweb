import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import 'howler';

@Component({
  selector: 'vob-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})

export class PlayerComponent implements OnInit {
  @Input() source: any;
  @Output() playerClick = new EventEmitter();
  private player: any;
  public progress = '0%';

  ngOnInit() {
    this.player = new Howl({
      src: [this.source],
      volume: 0.5,
      onplay: () => {
        requestAnimationFrame(this.step.bind(this));
      }
    });
  }

  seekerClick(event) {
    const pointClicked = event.layerX / event.target.offsetWidth;
    this.progress = '0%';
    this.progress = (pointClicked * 100) + '%';
    this.seek(pointClicked);
  }

  seek(per) {
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
    this.playerClick.emit(this.player);
  }
}
