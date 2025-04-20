import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PrimeTemplate} from "primeng/api";
import {TableModule} from "primeng/table";
import {DroneDTO} from '../../interfaces/DroneDTO.interface';
import {ButtonDirective} from 'primeng/button';
import {MatIcon} from '@angular/material/icon';
import {UpdateModalComponent} from '../update-modal/update-modal.component';
import {DeleteButtonComponent} from '../../../matrices/components/delete-button/delete-button.component';

@Component({
  selector: 'pages-drones-table-all-drones',
  standalone: true,
  imports: [
    PrimeTemplate,
    TableModule,
    ButtonDirective,
    MatIcon,
    UpdateModalComponent,
    DeleteButtonComponent,
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
  @Output()
  public deleteDroneEmitter: EventEmitter<number> = new EventEmitter();
  public deleteTitle: string = "Are you sure about deleting this drone?";
  public deletesubTitle: string = "This can't be undone";

  openEditModal(drone: DroneDTO): void {
    this.selectedDrone = {...drone};
    this.editModalVisible = true;
  }

  closeEditModal(): void {
    this.editModalVisible = false;
  }

  updateDrone(updatedDrone: DroneDTO): void {
    this.updatedDroneEmitter.emit(updatedDrone);
  }

  deleteDrone(droneId: number): void {
    this.deleteDroneEmitter.emit(droneId);
  }

}
