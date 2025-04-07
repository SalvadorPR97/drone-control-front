import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixGridComponent } from './matrix-grid.component';

describe('GridComponent', () => {
  let component: MatrixGridComponent;
  let fixture: ComponentFixture<MatrixGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatrixGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatrixGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
