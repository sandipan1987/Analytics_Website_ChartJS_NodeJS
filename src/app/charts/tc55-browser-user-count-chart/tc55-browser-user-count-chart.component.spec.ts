import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TC55BrowserUserCountChartComponent } from './tc55-browser-user-count-chart.component';

describe('TC55BrowserUserCountChartComponent', () => {
  let component: TC55BrowserUserCountChartComponent;
  let fixture: ComponentFixture<TC55BrowserUserCountChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TC55BrowserUserCountChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TC55BrowserUserCountChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
