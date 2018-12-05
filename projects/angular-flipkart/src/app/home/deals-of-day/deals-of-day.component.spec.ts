import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealsOfDayComponent } from './deals-of-day.component';

describe('DealsOfDayComponent', () => {
  let component: DealsOfDayComponent;
  let fixture: ComponentFixture<DealsOfDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealsOfDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealsOfDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
