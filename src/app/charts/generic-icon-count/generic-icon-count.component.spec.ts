import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericIconCountComponent } from './generic-icon-count.component';

describe('GenericIconCountComponent', () => {
  let component: GenericIconCountComponent;
  let fixture: ComponentFixture<GenericIconCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericIconCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericIconCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
