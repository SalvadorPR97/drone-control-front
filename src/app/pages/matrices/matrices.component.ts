import {Component} from '@angular/core';
import {TabViewModule} from 'primeng/tabview';
import {Nullable} from 'primeng/ts-helpers';
import {MatrixService} from '../../core/services/matrix.service';
import {Matrix} from '../../core/interfaces/Matrix.interface';
import {Drone} from '../../core/interfaces/Drone.interface';
import {MatrixGridComponent} from './components/grid/matrix-grid.component';
import {DronesTableComponent} from '../drones/components/drones-table/drones-table.component';
import {SearchButtonComponent} from './components/search-button/search-button.component';

@Component({
  selector: 'app-pages-matrices',
  imports: [
    TabViewModule,
    SearchButtonComponent,
    DronesTableComponent,
    MatrixGridComponent
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

}
