import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgmodeldemoComponent } from './ngmodeldemo.component';

describe('NgmodeldemoComponent', () => {
  let component: NgmodeldemoComponent;
  let fixture: ComponentFixture<NgmodeldemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgmodeldemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgmodeldemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
