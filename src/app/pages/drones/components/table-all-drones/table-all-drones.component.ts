import {Component, Input} from '@angular/core';
import {PrimeTemplate} from "primeng/api";
import {TableModule} from "primeng/table";
import {DroneDTO} from '../../interfaces/DroneDTO.interface';
import {ButtonDirective} from 'primeng/button';

@Component({
  selector: 'pages-drones-table-all-drones',
  standalone: true,
  imports: [
    PrimeTemplate,
    TableModule,
    ButtonDirective
  ],
  templateUrl: './table-all-drones.component.html',
  styleUrl: './table-all-drones.component.css'
})
export class TableAllDronesComponent {
  @Input()
  public drones: DroneDTO[] = [];
}
