import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Matrix} from '../interfaces/Matrix.interface';

@Injectable({
  providedIn: 'root'
})
export class MatrixService {

  private readonly matrixUrl: string = "http://localhost:8080/matrix/";
  constructor(private readonly http: HttpClient) {}

  public getMatrix(matrix_id: number): Observable<Matrix> {
    return this.http.get<Matrix>(`${this.matrixUrl}get/${matrix_id}`)
  }
}
