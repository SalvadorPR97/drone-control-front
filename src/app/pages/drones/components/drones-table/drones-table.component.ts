import {Component, Input} from '@angular/core';
import {PrimeTemplate} from 'primeng/api';
import {TableModule} from 'primeng/table';
import {Drone} from '../../../../core/interfaces/Drone.interface';

@Component({
  selector: 'pages-drones-drones-table',
  standalone: true,
  imports: [
    PrimeTemplate,
    TableModule
  ],
  templateUrl: './drones-table.component.html',
  styleUrl: './drones-table.component.css'
})
export class DronesTableComponent {
  @Input()
  public drones!: Drone[];

}
