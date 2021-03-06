import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrewingComponent } from './brewing.component';

describe('BrewingComponent', () => {
  let component: BrewingComponent;
  let fixture: ComponentFixture<BrewingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrewingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrewingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
