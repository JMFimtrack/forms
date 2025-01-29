import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkelAnimationComponent } from './skel-animation.component';

describe('SkelAnimationComponent', () => {
  let component: SkelAnimationComponent;
  let fixture: ComponentFixture<SkelAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkelAnimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkelAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
