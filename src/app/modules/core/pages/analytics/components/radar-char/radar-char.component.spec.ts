import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadarCharComponent } from './radar-char.component';

describe('RadarCharComponent', () => {
  let component: RadarCharComponent;
  let fixture: ComponentFixture<RadarCharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadarCharComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RadarCharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
