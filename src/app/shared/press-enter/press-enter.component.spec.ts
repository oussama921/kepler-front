import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressEnterComponent } from './press-enter.component';

describe('PressEnterComponent', () => {
  let component: PressEnterComponent;
  let fixture: ComponentFixture<PressEnterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PressEnterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PressEnterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
