import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportServiceUseComponent } from './import-service-use.component';

describe('ImportServiceUseComponent', () => {
  let component: ImportServiceUseComponent;
  let fixture: ComponentFixture<ImportServiceUseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportServiceUseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportServiceUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
