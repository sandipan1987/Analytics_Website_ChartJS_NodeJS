import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionToTC55CountChartComponent } from './version-to-tc55-count-chart.component';

describe('VersionToTC55CountChartComponent', () => {
  let component: VersionToTC55CountChartComponent;
  let fixture: ComponentFixture<VersionToTC55CountChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersionToTC55CountChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionToTC55CountChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
