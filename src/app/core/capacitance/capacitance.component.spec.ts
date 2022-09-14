import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacitanceComponent } from './capacitance.component';

describe('CapacitanceComponent', () => {
  let component: CapacitanceComponent;
  let fixture: ComponentFixture<CapacitanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapacitanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapacitanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
