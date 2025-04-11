import {Command} from '../../../core/interfaces/Command.enum';

export interface DroneMove {
  id: number;
  matrizId: number;
  orden: Command[];
}
