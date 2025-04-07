import {Component} from '@angular/core';
import {TabViewModule} from 'primeng/tabview';
import {Nullable} from 'primeng/ts-helpers';
import {MatrixService} from '../../core/services/matrix.service';
import {Matrix} from './interfaces/Matrix.interface';
import {Drone} from '../drones/interfaces/Drone.interface';
import {MatrixGridComponent} from './components/grid/matrix-grid.component';
import {DronesTableComponent} from '../drones/components/drones-table/drones-table.component';
import {SearchButtonComponent} from './components/search-button/search-button.component';
import {FormCreateComponent} from './components/form-create/form-create.component';
import {MatrixEntrada} from './interfaces/MatrixEntrada.interface';
import {MatrixDTO} from './interfaces/MatrixDTO.interface';
import {FormUpdateComponent} from './components/form-update/form-update.component';

@Component({
  selector: 'app-pages-matrices',
  imports: [
    TabViewModule,
    SearchButtonComponent,
    DronesTableComponent,
    MatrixGridComponent,
    FormCreateComponent,
    FormUpdateComponent
  ],
  standalone: true,
  templateUrl: './matrices.component.html',
  styleUrl: './matrices.component.css'
})
export class MatricesComponent {
  constructor(public matrixService: MatrixService) {
  }

  public matrix!: Matrix;
  public drones: Drone[] = [];
  public getMatrix(id: Nullable<number>): void {
    if (id != null) {
      this.matrixService.getMatrix(id).subscribe((res: Matrix) => {
        this.matrix = res;
        this.drones = res.drones;
      })
    }
  }
  public createdModal: boolean = false;
  public createMatrix(matrixEntrada: MatrixEntrada): void {
    this.matrixService.createMatrix(matrixEntrada).subscribe((res: MatrixDTO) => {
      console.log(res);
      this.createdModal = true;
    });
  }
  public updatedModal: boolean = false;
  public updateMatrix(matrixDTO: MatrixDTO): void {
    this.matrixService.updateMatrix(matrixDTO).subscribe((res: MatrixDTO) => {
      console.log(res);
      this.updatedModal = true;
    })
  }
}
