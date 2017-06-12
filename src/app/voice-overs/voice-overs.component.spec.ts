import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceOversComponent } from './voice-overs.component';

describe('VoiceOversComponent', () => {
  let component: VoiceOversComponent;
  let fixture: ComponentFixture<VoiceOversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoiceOversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiceOversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
