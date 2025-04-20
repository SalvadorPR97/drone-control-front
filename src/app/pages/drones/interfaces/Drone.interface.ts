import {Orientation} from '../../../core/interfaces/Orientation.enum';

export interface Drone {
  id: number;
  nombre: string;
  modelo: string;
  x: number;
  y: number;
  orientacion: Orientation;
}
