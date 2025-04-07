import {Drone} from '../../drones/interfaces/Drone.interface';

export interface Matrix {
  id: number;
  max_x: number;
  max_y: number;
  drones: Drone[];
}
