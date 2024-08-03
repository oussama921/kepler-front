import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumericSingleInputComponent } from './numeric-single-input.component';

describe('NumericSingleInputComponent', () => {
  let component: NumericSingleInputComponent;
  let fixture: ComponentFixture<NumericSingleInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumericSingleInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumericSingleInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
