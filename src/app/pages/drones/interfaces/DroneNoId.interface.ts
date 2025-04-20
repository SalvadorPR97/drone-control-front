import {Orientation} from '../../../core/interfaces/Orientation.enum';

export interface DroneNoId {
  nombre: string;
  modelo: string;
  x: number;
  y: number;
  orientacion: Orientation;
  matrizId: number;
}
