import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPickertimeComponent } from './input-pickertime.component';

describe('InputPickertimeComponent', () => {
  let component: InputPickertimeComponent;
  let fixture: ComponentFixture<InputPickertimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputPickertimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputPickertimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
