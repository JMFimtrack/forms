import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPickerdateComponent } from './input-pickerdate.component';

describe('InputPickerdateComponent', () => {
  let component: InputPickerdateComponent;
  let fixture: ComponentFixture<InputPickerdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputPickerdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputPickerdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
