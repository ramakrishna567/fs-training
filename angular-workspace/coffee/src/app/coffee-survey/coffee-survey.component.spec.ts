import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeSurveyComponent } from './coffee-survey.component';

describe('CoffeeSurveyComponent', () => {
  let component: CoffeeSurveyComponent;
  let fixture: ComponentFixture<CoffeeSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeeSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
