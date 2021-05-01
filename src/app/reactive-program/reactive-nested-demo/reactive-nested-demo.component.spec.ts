import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveNestedDemoComponent } from './reactive-nested-demo.component';

describe('ReactiveNestedDemoComponent', () => {
  let component: ReactiveNestedDemoComponent;
  let fixture: ComponentFixture<ReactiveNestedDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveNestedDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveNestedDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
