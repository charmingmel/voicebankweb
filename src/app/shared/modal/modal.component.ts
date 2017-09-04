import { Component, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'vob-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements AfterViewInit {
  @Input() caption: any = {};

  ngAfterViewInit() {}

  close() {
    this.caption.hide = true;
  }

}
