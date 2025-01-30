import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCleanComponent } from './input-clean.component';

describe('InputCleanComponent', () => {
  let component: InputCleanComponent;
  let fixture: ComponentFixture<InputCleanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputCleanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputCleanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
