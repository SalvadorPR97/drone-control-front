import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DronesTableComponent } from './drones-table.component';

describe('DronesTableComponent', () => {
  let component: DronesTableComponent;
  let fixture: ComponentFixture<DronesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DronesTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DronesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
