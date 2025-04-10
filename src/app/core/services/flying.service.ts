import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {DroneMove} from '../../pages/drones/interfaces/DroneMove.interface';
import {Matrix} from '../../pages/matrices/interfaces/Matrix.interface';

@Injectable({
  providedIn: 'root'
})
export class FlyingService {

  constructor(private readonly http: HttpClient) { }
  public flyingBaseUrl = 'http://localhost:8080/drone/';

  public moveDrone(droneMove: DroneMove): Observable<Matrix> {
    return this.http.post<Matrix>(`${this.flyingBaseUrl}move`, droneMove).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Ocurrió un error inesperado';
    if (error.error?.message) {
      errorMessage = error.error.message;
    }
    const errorCode = error.status;
    return throwError(() => new Error(`Código de error: ${errorCode}, Mensaje: ${errorMessage}`));
  }
}
