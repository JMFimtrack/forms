import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestaPrendaComponent } from './presta-prenda.component';

describe('PrestaPrendaComponent', () => {
  let component: PrestaPrendaComponent;
  let fixture: ComponentFixture<PrestaPrendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrestaPrendaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrestaPrendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
