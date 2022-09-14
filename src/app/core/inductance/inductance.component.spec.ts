import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InductanceComponent } from './inductance.component';

describe('InductanceComponent', () => {
  let component: InductanceComponent;
  let fixture: ComponentFixture<InductanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InductanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InductanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
