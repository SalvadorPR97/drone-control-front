// src/app/services/drone.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { DroneService } from './drone.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DroneService', () => {
  let service: DroneService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DroneService]
    });
    service = TestBed.inject(DroneService);
  });

  it('debería crearse correctamente', () => {
    expect(service).toBeTruthy();
  });
});
