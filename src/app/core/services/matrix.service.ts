import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
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
    return this.http.get<Matrix>(`${this.matrixUrl}get/${matrix_id}`)
  }
  public createMatrix(matrixEntrada: MatrixEntrada): Observable<MatrixDTO> {
    return this.http.post<MatrixDTO>(`${this.matrixUrl}new`, matrixEntrada);
  }
  public updateMatrix(matrixDTO: MatrixDTO): Observable<Matrix> {
    return this.http.put<Matrix>(`${this.matrixUrl}update/${matrixDTO.id}`, matrixDTO);
  }
}
