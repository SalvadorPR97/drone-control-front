import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TabViewModule} from 'primeng/tabview';
import {FloatLabelModule} from 'primeng/floatlabel';
import {InputNumberModule} from 'primeng/inputnumber';
import {ButtonDirective} from 'primeng/button';
import {Nullable} from 'primeng/ts-helpers';
import {MatrixService} from '../../core/services/matrix.service';
import {Matrix} from '../../core/interfaces/Matrix.interface';
import { SplitterModule } from 'primeng/splitter';
import {DataViewModule} from 'primeng/dataview';
import {TagModule} from 'primeng/tag';
import {Drone} from '../../core/interfaces/Drone.interface';
import {TableModule} from 'primeng/table';

@Component({
  selector: 'app-pages-matrices',
  imports: [
    FormsModule,
    TabViewModule,
    FloatLabelModule,
    InputNumberModule,
    ButtonDirective,
    SplitterModule,
    DataViewModule,
    TagModule,
    TableModule,
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

  isBusy(x: number, y: number): boolean {
    return this.drones.some(drone => drone.x === x && drone.y === y);
  }

  protected readonly Array = Array;
}
