import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IterationforComponent } from './iterationfor.component';

describe('IterationforComponent', () => {
  let component: IterationforComponent;
  let fixture: ComponentFixture<IterationforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IterationforComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IterationforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
