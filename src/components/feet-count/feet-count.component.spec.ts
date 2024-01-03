import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeetCountComponent } from './feet-count.component';

describe('FeetCountComponent', () => {
  let component: FeetCountComponent;
  let fixture: ComponentFixture<FeetCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeetCountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeetCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
