import {Component} from '@angular/core';
import {TableAllDronesComponent} from './components/table-all-drones/table-all-drones.component';
import {DroneService} from '../../core/services/drone.service';
import {DroneDTO} from './interfaces/DroneDTO.interface';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-pages-drones',
  imports: [
    TableAllDronesComponent,
    ToastModule
  ],
  standalone: true,
  templateUrl: './drones.component.html',
  styleUrl: './drones.component.css'
})
export class DronesComponent {
  constructor(private readonly droneService: DroneService,
              private readonly messageService: MessageService) {
  }

  public drones!: DroneDTO[];

  ngOnInit() {
    this.droneService.getAllDrones().subscribe({
      next: (drones) => this.drones = drones
      ,
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error getting drones',
          detail: error.message
        });
      }
    });

  }

  public updateDrone(drone: DroneDTO) {
    this.droneService.updateDrone(drone).subscribe({
      next: (drone: DroneDTO) => {
        this.drones = this.drones.map(oldDrone => {
          if (oldDrone.id === drone.id) {
            return drone;
          }
          return oldDrone;
        });
        this.messageService.add({
          severity: 'success',
          summary: 'Drone updated',
          detail: "Drone updated successfully",
        });
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error updating drone',
          detail: error.message
        });
      }
    });
    console.log(this.drones);
  }
}
