import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempelateformComponent } from './tempelateform.component';

describe('TempelateformComponent', () => {
  let component: TempelateformComponent;
  let fixture: ComponentFixture<TempelateformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempelateformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempelateformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
