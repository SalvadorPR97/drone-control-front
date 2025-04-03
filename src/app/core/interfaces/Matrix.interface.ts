import {Drone} from './Drone.interface';

export interface Matrix {
  id: number;
  max_x: number;
  max_y: number;
  drones: Drone[];
}
