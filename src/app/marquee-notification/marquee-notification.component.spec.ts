import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarqueeNotificationComponent } from './marquee-notification.component';

describe('MarqueeNotificationComponent', () => {
  let component: MarqueeNotificationComponent;
  let fixture: ComponentFixture<MarqueeNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarqueeNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarqueeNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
