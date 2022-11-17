import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionToLoginTypeCountChartComponent } from './version-to-login-type-count-chart.component';

describe('VersionToLoginTypeCountChartComponent', () => {
  let component: VersionToLoginTypeCountChartComponent;
  let fixture: ComponentFixture<VersionToLoginTypeCountChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersionToLoginTypeCountChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionToLoginTypeCountChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
