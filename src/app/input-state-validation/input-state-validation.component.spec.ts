import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputStateValidationComponent } from './input-state-validation.component';

describe('InputStateValidationComponent', () => {
  let component: InputStateValidationComponent;
  let fixture: ComponentFixture<InputStateValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputStateValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputStateValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
