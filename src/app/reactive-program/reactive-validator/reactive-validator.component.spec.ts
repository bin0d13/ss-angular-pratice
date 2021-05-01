import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveValidatorComponent } from './reactive-validator.component';

describe('ReactiveValidatorComponent', () => {
  let component: ReactiveValidatorComponent;
  let fixture: ComponentFixture<ReactiveValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
