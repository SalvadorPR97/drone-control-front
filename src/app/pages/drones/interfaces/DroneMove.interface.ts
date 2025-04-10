import {Command} from '../../../core/interfaces/Command';

export interface DroneMove {
  id: number;
  matrizId: number;
  orden: Command[];
}
