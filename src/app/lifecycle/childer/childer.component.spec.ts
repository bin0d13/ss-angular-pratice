import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChilderComponent } from './childer.component';

describe('ChilderComponent', () => {
  let component: ChilderComponent;
  let fixture: ComponentFixture<ChilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
