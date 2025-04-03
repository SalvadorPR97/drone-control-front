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

@Component({
  selector: 'app-pages-matrices',
  imports: [
    FormsModule,
    TabViewModule,
    FloatLabelModule,
    InputNumberModule,
    ButtonDirective,
    SplitterModule,
  ],
  standalone: true,
  templateUrl: './matrices.component.html',
  styleUrl: './matrices.component.css'
})
export class MatricesComponent {
  constructor(public matrixService: MatrixService) {
  }

  public matrix_id: number = 0;
  public matrix!: Matrix;

  public getMatrix(id: Nullable<number>): void {
    console.log(id);
    if (id != null) {
      this.matrixService.getMatrix(id).subscribe((res: Matrix) => {
        this.matrix = res;
        console.log(res);
      })
    }
  }
}
