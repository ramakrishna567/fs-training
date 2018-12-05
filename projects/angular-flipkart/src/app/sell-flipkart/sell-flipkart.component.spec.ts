import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellFlipkartComponent } from './sell-flipkart.component';

describe('SellFlipkartComponent', () => {
  let component: SellFlipkartComponent;
  let fixture: ComponentFixture<SellFlipkartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellFlipkartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellFlipkartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
