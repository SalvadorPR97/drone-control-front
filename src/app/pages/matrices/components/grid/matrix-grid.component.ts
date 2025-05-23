import {Component, Input, SimpleChanges} from '@angular/core';
import {Matrix} from '../../interfaces/Matrix.interface';
import {NgClass} from '@angular/common';
import {Drone} from '../../../drones/interfaces/Drone.interface';
import {ChipModule} from 'primeng/chip';

@Component({
  selector: 'pages-matrices-matrix-grid',
  standalone: true,
  imports: [
    NgClass,
    ChipModule
  ],
  templateUrl: './matrix-grid.component.html',
  styleUrl: './matrix-grid.component.css'
})
export class MatrixGridComponent {
  @Input()
  public matrix!: Matrix;
  public rows!: number[];
  public cols!: number[];
  public drones!: Drone[];
  protected readonly Array = Array;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['matrix']) {
      this.drones = this.matrix.drones;
      this.rows = [...Array(this.matrix.max_y).keys()].slice().reverse();
      this.cols = [...(Array(this.matrix.max_x).keys())];
    }
  }

  isBusy(x: number, y: number): boolean {
    return this.drones.some(drone => drone.x === x && drone.y === y);
  }

  getDroneClass(row: number, col: number): string {
    let drone: Drone | undefined = this.drones.find(drone => drone.x == row && drone.y == col);
    return `drone-${drone?.orientacion}`;
  }
}
