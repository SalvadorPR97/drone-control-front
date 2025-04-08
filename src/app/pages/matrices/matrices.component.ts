import {Component} from '@angular/core';
import {TabViewModule} from 'primeng/tabview';
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
import {FormsModule} from '@angular/forms';
import {MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import {DeleteButtonComponent} from './components/delete-button/delete-button.component';

@Component({
  selector: 'app-pages-matrices',
  imports: [
    TabViewModule,
    SearchButtonComponent,
    DronesTableComponent,
    MatrixGridComponent,
    FormCreateComponent,
    FormUpdateComponent,
    FormsModule,
    ToastModule,
    DeleteButtonComponent
  ],
  standalone: true,
  templateUrl: './matrices.component.html',
  styleUrl: './matrices.component.css'
})
export class MatricesComponent {
  public matrix!: Matrix;
  public drones: Drone[] = [];
  public createdModal: boolean = false;
  public updatedModal: boolean = false;

  constructor(public matrixService: MatrixService,
              public messageService: MessageService,) {
  }

  public getMatrix(id: number): void {
    this.matrixService.getMatrix(id).subscribe({
      next: (res: Matrix) => {
        this.matrix = res;
        this.drones = res.drones;
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error getting the matrix',
          detail: error.message
        });
      }
    });
  }

  public createMatrix(matrixEntrada: MatrixEntrada): void {
    this.createdModal = false;
    this.matrixService.createMatrix(matrixEntrada).subscribe({
      next: () => {
        this.createdModal = true;
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error creating matrix',
          detail: error.message
        });
      }
    });
  }

  public updateMatrix(matrixDTO: MatrixDTO): void {
    this.updatedModal = false;
    this.matrixService.updateMatrix(matrixDTO).subscribe({
      next: (res: MatrixDTO) => {
        this.updatedModal = true;
        this.matrix = {...res, drones: this.matrix.drones};
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error updating matrix',
          detail: error.message
        });
      }
    })
  }

  public deleteMatrix(id: number): void {
    this.matrixService.deleteMatrix(id).subscribe({
      next: () => {
        window.location.reload();
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error deleting matrix',
          detail: error.message
        });
      }
    });
  }
}
