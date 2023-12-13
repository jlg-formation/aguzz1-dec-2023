import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluidButtonComponent } from './fluid-button.component';

describe('FluidButtonComponent', () => {
  let component: FluidButtonComponent;
  let fixture: ComponentFixture<FluidButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FluidButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FluidButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
