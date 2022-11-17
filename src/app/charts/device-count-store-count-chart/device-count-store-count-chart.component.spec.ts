import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceCountStoreCountChartComponent } from './device-count-store-count-chart.component';

describe('DeviceCountStoreCountChartComponent', () => {
  let component: DeviceCountStoreCountChartComponent;
  let fixture: ComponentFixture<DeviceCountStoreCountChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceCountStoreCountChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceCountStoreCountChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
