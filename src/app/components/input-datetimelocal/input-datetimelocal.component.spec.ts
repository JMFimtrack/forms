import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDatetimelocalComponent } from './input-datetimelocal.component';

describe('InputDatetimelocalComponent', () => {
  let component: InputDatetimelocalComponent;
  let fixture: ComponentFixture<InputDatetimelocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputDatetimelocalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputDatetimelocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
