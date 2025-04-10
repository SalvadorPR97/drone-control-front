import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroneCommandsComponent } from './drone-commands.component';

describe('DroneCommandsComponent', () => {
  let component: DroneCommandsComponent;
  let fixture: ComponentFixture<DroneCommandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DroneCommandsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DroneCommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
