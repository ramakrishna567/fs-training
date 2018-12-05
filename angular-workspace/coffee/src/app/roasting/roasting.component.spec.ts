import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoastingComponent } from './roasting.component';

describe('RoastingComponent', () => {
  let component: RoastingComponent;
  let fixture: ComponentFixture<RoastingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoastingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
