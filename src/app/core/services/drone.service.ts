import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {DroneDTO} from '../../pages/drones/interfaces/DroneDTO.interface';
import {DroneNoId} from '../../pages/drones/interfaces/DroneNoId.interface';

@Injectable({
  providedIn: 'root'
})
export class DroneService {

  constructor(private readonly http: HttpClient) { }
  private readonly dronesBaseUrl: string = 'http://localhost:8080/drone/';

  public getAllDrones(): Observable<DroneDTO[]> {
    return this.http.get<DroneDTO[]>(`${this.dronesBaseUrl}getAll`).pipe(
      catchError(this.handleError)
    );
  }

  public updateDrone(drone: DroneDTO): Observable<DroneDTO> {
    return this.http.put<DroneDTO>(`${this.dronesBaseUrl}update/${drone.id}`, drone).pipe(
      catchError(this.handleError)
    );
  }

  public createDrone(drone: DroneNoId): Observable<DroneDTO> {
    return this.http.post<DroneDTO>(`${this.dronesBaseUrl}new`, drone).pipe(
      catchError(this.handleError)
    );
  }

  public deleteDrone(droneId: number): Observable<DroneDTO> {
    return this.http.delete<DroneDTO>(`${this.dronesBaseUrl}delete/${droneId}`).pipe(
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
