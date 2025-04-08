import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {Matrix} from '../../pages/matrices/interfaces/Matrix.interface';
import {MatrixEntrada} from '../../pages/matrices/interfaces/MatrixEntrada.interface';
import {MatrixDTO} from '../../pages/matrices/interfaces/MatrixDTO.interface';

@Injectable({
  providedIn: 'root'
})
export class MatrixService {

  private readonly matrixUrl: string = "http://localhost:8080/matrix/";
  constructor(private readonly http: HttpClient) {}

  public getMatrix(matrix_id: number): Observable<Matrix> {
    return this.http.get<Matrix>(`${this.matrixUrl}get/${matrix_id}`).pipe(
      catchError(this.handleError)
    );
  }
  public createMatrix(matrixEntrada: MatrixEntrada): Observable<MatrixDTO> {
    return this.http.post<MatrixDTO>(`${this.matrixUrl}new`, matrixEntrada).pipe(
      catchError(this.handleError)
    );
  }
  public updateMatrix(matrixDTO: MatrixDTO): Observable<Matrix> {
    return this.http.put<Matrix>(`${this.matrixUrl}update/${matrixDTO.id}`, matrixDTO).pipe(
      catchError(this.handleError)
    );
  }
  public deleteMatrix(matrix_id: number): Observable<Matrix> {
    return this.http.delete<Matrix>(`${this.matrixUrl}delete/${matrix_id}`).pipe(
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
