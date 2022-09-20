import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalValuesComponent } from './final-values.component';

describe('FinalValuesComponent', () => {
  let component: FinalValuesComponent;
  let fixture: ComponentFixture<FinalValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalValuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
