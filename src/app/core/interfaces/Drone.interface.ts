import {Orientation} from './Orientation.enum';

export interface Drone {
  id: number;
  nombre: string;
  modelo: string;
  x: number;
  y: number;
  orientacion: Orientation;
}
