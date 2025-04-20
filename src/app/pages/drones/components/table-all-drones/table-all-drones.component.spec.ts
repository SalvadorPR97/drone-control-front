import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAllDronesComponent } from './table-all-drones.component';

describe('TableAllDronesComponent', () => {
  let component: TableAllDronesComponent;
  let fixture: ComponentFixture<TableAllDronesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableAllDronesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableAllDronesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
