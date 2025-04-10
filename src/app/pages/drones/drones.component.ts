import {Component} from '@angular/core';
import {TableAllDronesComponent} from './components/table-all-drones/table-all-drones.component';
import {DroneService} from '../../core/services/drone.service';
import {DroneDTO} from './interfaces/DroneDTO.interface';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import {CreateDroneComponent} from './components/create-drone/create-drone.component';
import {DroneNoId} from './interfaces/DroneNoId.interface';

@Component({
  selector: 'app-pages-drones',
  imports: [
    TableAllDronesComponent,
    ToastModule,
    CreateDroneComponent
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
  public droneCreated:boolean = false;

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

  public createDrone(drone: DroneNoId) {
    this.droneService.createDrone(drone).subscribe({
      next: (drone: DroneDTO) => {
        this.drones.push(drone);
        this.messageService.add({
          severity: 'success',
          summary: 'Drone created',
          detail: "Drone created successfully",
        });
        this.droneCreated = true;
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error creating drone',
          detail: error.message
        });
      }
    });
    console.log(this.drones);
  }

  public deleteDrone(droneId: number) {
    this.droneService.deleteDrone(droneId).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Drone deleted',
          detail: "Drone deleted successfully",
        });
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error deleting drone',
          detail: error.message
        });
      }
    });
  }


}
