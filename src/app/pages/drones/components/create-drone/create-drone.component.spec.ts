import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDroneComponent } from './create-drone.component';

describe('CreateButtonComponent', () => {
  let component: CreateDroneComponent;
  let fixture: ComponentFixture<CreateDroneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateDroneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDroneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
