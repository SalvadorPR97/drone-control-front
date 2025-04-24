import { TestBed } from '@angular/core/testing';
import { MatrixService } from './matrix.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Matrix } from '../../pages/matrices/interfaces/Matrix.interface';
import { MatrixDTO } from '../../pages/matrices/interfaces/MatrixDTO.interface';

describe('MatrixService', () => {
  let service: MatrixService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  // Asegúrate de que HttpClientTestingModule esté incluido
      providers: [MatrixService],          // Asegúrate de que el servicio esté correctamente proporcionado
    });

    service = TestBed.inject(MatrixService);  // Inyección del servicio
    httpMock = TestBed.inject(HttpTestingController);  // Inyección de HttpTestingController
  });

  afterEach(() => {
    try {
      httpMock.verify();  // Verifica que no haya peticiones pendientes
    } catch (error) {
      console.error('Error en la verificación de peticiones HTTP:', error);
    }
  });

  it('debería obtener IDs de matrices con GET', () => {
    const mockIds = [1, 2, 3];

    service.getMatricesIds().subscribe(ids => {
      expect(ids).toEqual(mockIds);
    });

    const req = httpMock.expectOne('http://localhost:8080/matrix/getAll');
    expect(req.request.method).toBe('GET');
    req.flush(mockIds); // Simula la respuesta con los IDs
  });

  it('debería manejar errores correctamente en getMatricesIds', () => {
    service.getMatricesIds().subscribe({
      next: () => fail('esperaba error'),
      error: err => {
        expect(err.message).toContain('Código de error: 500');
      }
    });

    const req = httpMock.expectOne('http://localhost:8080/matrix/getAll');
    req.flush({ message: 'Error del servidor' }, { status: 500, statusText: 'Server Error' });
  });

  it('debería actualizar una matriz con PUT', () => {
    const matrixDTO: MatrixDTO = { id: 1, max_x: 10, max_y: 10 };
    const updatedMatrix: Matrix = { id: 1, max_x: 10, max_y: 10, drones: [] };

    service.updateMatrix(matrixDTO).subscribe(matrix => {
      expect(matrix).toEqual(updatedMatrix);
    });

    const req = httpMock.expectOne(`http://localhost:8080/matrix/update/${matrixDTO.id}`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(matrixDTO); // Comprobamos que el body enviado es el correcto
    req.flush(updatedMatrix); // Simulamos la respuesta con la matriz actualizada
  });
});
