import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TC55InMultistoreCountChartComponent } from './tc55-in-multistore-count-chart.component';

describe('TC55InMultistoreCountChartComponent', () => {
  let component: TC55InMultistoreCountChartComponent;
  let fixture: ComponentFixture<TC55InMultistoreCountChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TC55InMultistoreCountChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TC55InMultistoreCountChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
