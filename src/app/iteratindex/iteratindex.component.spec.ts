import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IteratindexComponent } from './iteratindex.component';

describe('IteratindexComponent', () => {
  let component: IteratindexComponent;
  let fixture: ComponentFixture<IteratindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IteratindexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IteratindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
