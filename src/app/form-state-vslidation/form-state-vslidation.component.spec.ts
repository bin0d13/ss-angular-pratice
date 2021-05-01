import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStateVslidationComponent } from './form-state-vslidation.component';

describe('FormStateVslidationComponent', () => {
  let component: FormStateVslidationComponent;
  let fixture: ComponentFixture<FormStateVslidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormStateVslidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormStateVslidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
