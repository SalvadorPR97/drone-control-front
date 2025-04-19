import {Component} from '@angular/core';
import {MatrixGridComponent} from '../matrices/components/grid/matrix-grid.component';
import {SearchButtonComponent} from '../matrices/components/search-button/search-button.component';
import {Matrix} from '../matrices/interfaces/Matrix.interface';
import {MatrixService} from '../../core/services/matrix.service';
import {Drone} from '../drones/interfaces/Drone.interface';
import {MessageService} from 'primeng/api';
import {DronesTableComponent} from './components/drones-table/drones-table.component';
import {DroneCommandsComponent} from './components/drone-commands/drone-commands.component';
import {Command} from '../../core/interfaces/Command.enum';
import {DroneMove} from '../drones/interfaces/DroneMove.interface';
import {FlyingService} from '../../core/services/flying.service';
import {ToastModule} from 'primeng/toast';
import {firstValueFrom} from 'rxjs';
import {AccordionModule} from 'primeng/accordion';
import {CommandListExecComponent} from './components/command-list-exec/command-list-exec.component';

@Component({
  selector: 'app-pages-flying',
  imports: [
    DronesTableComponent,
    MatrixGridComponent,
    SearchButtonComponent,
    DronesTableComponent,
    DroneCommandsComponent,
    ToastModule,
    AccordionModule,
    CommandListExecComponent
  ],
  standalone: true,
  templateUrl: './flying.component.html',
  styleUrl: './flying.component.css'
})
export class FlyingComponent {

  public matrix!: Matrix;
  public drones!: Drone[];
  public matricesIds!: number[];
  public selectedDrones!: Drone[];

  constructor(private readonly matrixService: MatrixService, private readonly messageService: MessageService,
              private readonly flyingService: FlyingService) {
  }

  ngOnInit() {
    this.matrixService.getMatricesIds().subscribe(matricesIds => {
      this.matricesIds = matricesIds;
    })
  }

  public getMatrix(id: number): void {
    this.matrixService.getMatrix(id).subscribe({
      next: (res: Matrix) => {
        this.matrix = res;
        this.drones = res.drones;
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error getting the matrix',
          detail: error.message
        });
      }
    });
  }

  public async moveDrone(command: Command | Command[]): Promise<void> {
    if (!this.selectedDrones?.length) return;

    let allSuccess: boolean = true;
    let errormsg: string = "";


    for (const drone of this.selectedDrones) {
      const droneMove: DroneMove = {
        id: drone.id,
        matrizId: this.matrix.id,
        orden: Array.isArray(command)? command : [command],
      };

      try {
        const updatedMatrix = await firstValueFrom(this.flyingService.moveDrone(droneMove));
        if (updatedMatrix) {
          this.matrix = updatedMatrix;
          this.drones = updatedMatrix.drones;
        }
      } catch (error: any) {
        allSuccess = false;
        errormsg = error;
      }
    }

    this.messageService.add({
      severity: allSuccess ? 'success' : 'error',
      summary: allSuccess ? 'All drones moved' : 'Error moving some drones',
      detail: allSuccess
        ? 'All selected drones moved successfully'
        : errormsg,
    });
  }

}

