import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PrimeTemplate} from "primeng/api";
import {TableModule} from "primeng/table";
import {DroneDTO} from '../../interfaces/DroneDTO.interface';
import {ButtonDirective} from 'primeng/button';
import {MatIcon} from '@angular/material/icon';
import {UpdateModalComponent} from '../update-modal/update-modal.component';

@Component({
  selector: 'pages-drones-table-all-drones',
  standalone: true,
  imports: [
    PrimeTemplate,
    TableModule,
    ButtonDirective,
    MatIcon,
    UpdateModalComponent,
  ],
  templateUrl: './table-all-drones.component.html',
  styleUrl: './table-all-drones.component.css'
})
export class TableAllDronesComponent {

  constructor() {}
  @Input()
  public drones: DroneDTO[] = [];
  public editModalVisible: boolean = false;
  public selectedDrone!: DroneDTO;
  @Output()
  public updatedDroneEmitter: EventEmitter<DroneDTO> = new EventEmitter();

  openEditModal(drone: DroneDTO): void {
    this.selectedDrone = {...drone};
    this.editModalVisible = true;
  }

  closeEditModal(): void {
    this.editModalVisible = false;
  }

  updateDrone(updatedDrone: DroneDTO): void {
    console.log('Actualizado:', updatedDrone);
    this.updatedDroneEmitter.emit(updatedDrone);
  }

}
