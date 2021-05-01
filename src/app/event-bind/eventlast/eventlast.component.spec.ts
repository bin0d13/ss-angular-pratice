import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventlastComponent } from './eventlast.component';

describe('EventlastComponent', () => {
  let component: EventlastComponent;
  let fixture: ComponentFixture<EventlastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventlastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventlastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
