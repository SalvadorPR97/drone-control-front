import { Component } from '@angular/core';
import {TableAllDronesComponent} from './components/table-all-drones/table-all-drones.component';
import {DroneService} from '../../core/services/drone.service';
import {DroneDTO} from './interfaces/DroneDTO.interface';

@Component({
  selector: 'app-pages-drones',
  imports: [
    TableAllDronesComponent
  ],
  standalone: true,
  templateUrl: './drones.component.html',
  styleUrl: './drones.component.css'
})
export class DronesComponent {
  constructor(private readonly droneService: DroneService) {
  }
  public drones!: DroneDTO[];

  ngOnInit() {
    this.droneService.getAllDrones().subscribe((drones) => this.drones = drones);
  }

}
