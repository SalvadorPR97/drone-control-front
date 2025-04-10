import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PrimeTemplate} from 'primeng/api';
import {TableModule} from 'primeng/table';
import {Drone} from '../../../drones/interfaces/Drone.interface';

@Component({
  selector: 'pages-flying-drones-table',
  standalone: true,
  imports: [
    PrimeTemplate,
    TableModule,
  ],
  templateUrl: './drones-table.component.html',
  styleUrl: './drones-table.component.css'
})
export class DronesTableComponent {
  @Input()
  public drones!: Drone[];
  @Output()
  public selectedDronesEmitter: EventEmitter<Drone[]> = new EventEmitter();
  public selectedDrones: Drone[] = [];

  emitSelectedDrones () {
    this.selectedDronesEmitter.emit(this.selectedDrones);
  }
}
