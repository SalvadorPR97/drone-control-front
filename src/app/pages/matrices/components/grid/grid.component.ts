import {Component, Input} from '@angular/core';
import {Matrix} from '../../../../core/interfaces/Matrix.interface';
import {NgClass} from '@angular/common';
import {Drone} from '../../../../core/interfaces/Drone.interface';

@Component({
  selector: 'pages-matrices-matrix-grid',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent {
  @Input()
  public matrix!: Matrix;
  public rows!: number[];
  public cols!: number[];
  public drones!: Drone[];

  ngOnInit() {
    this.drones = this.matrix.drones;
    this.rows = [...(Array(this.matrix.max_x).keys())].slice().reverse();
    this.cols = [...Array(this.matrix.max_y).keys()];
  }

  isBusy(x: number, y: number): boolean {
    return this.drones.some(drone => drone.x === x && drone.y === y);
  }

  getArrowSymbol(row: number, col: number): string {
    let drone: Drone | undefined = this.drones.find(drone => drone.x == row && drone.y == col);
    if (drone) {
      switch (drone.orientacion) {
        case 'N':
          return '↑';
        case 'S':
          return '↓';
        case 'E':
          return '←';
        case 'O':
          return '→';
        default:
          return '';
      }
    }
    return '';
  }

  getArrowPositionClass(row: number, col: number): string {
    let drone: Drone | undefined = this.drones.find(drone => drone.x == row && drone.y == col);
    return `arrow-${drone?.orientacion}`;
  }

  protected readonly Array = Array;
}
