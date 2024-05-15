import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolarCharComponent } from './polar-char.component';

describe('PolarCharComponent', () => {
  let component: PolarCharComponent;
  let fixture: ComponentFixture<PolarCharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolarCharComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PolarCharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
