import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionToStoreCountChartComponent } from './version-to-store-count-chart.component';

describe('VersionToStoreCountChartComponent', () => {
  let component: VersionToStoreCountChartComponent;
  let fixture: ComponentFixture<VersionToStoreCountChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersionToStoreCountChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionToStoreCountChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
