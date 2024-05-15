import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaCharComponent } from './area-char.component';

describe('AreaCharComponent', () => {
  let component: AreaCharComponent;
  let fixture: ComponentFixture<AreaCharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaCharComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AreaCharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
