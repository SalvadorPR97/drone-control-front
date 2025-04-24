import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DroneDTO} from '../../interfaces/DroneDTO.interface';
import {DialogModule} from 'primeng/dialog';
import {FormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonDirective} from 'primeng/button';
import {Orientation} from '../../../../core/interfaces/Orientation.enum';

@Component({
  selector: 'pages-drones-update-modal',
  standalone: true,
  imports: [
    DialogModule,
    FormsModule,
    InputTextModule,
    ButtonDirective
  ],
  templateUrl: './update-modal.component.html',
  styleUrl: './update-modal.component.css'
})
export class UpdateModalComponent {
  @Input() visible: boolean = false;
  @Input() drone!: DroneDTO;
  @Output() visibleChangeEmitter: EventEmitter<boolean> = new EventEmitter();
  @Output() save: EventEmitter<DroneDTO> = new EventEmitter();
  public orientation: Orientation[] = [Orientation.N,Orientation.S,Orientation.E,Orientation.O];

  close() {
    this.visible = false;
    this.visibleChangeEmitter.emit(this.visible);
  }

  saveChanges() {
    this.save.emit(this.drone);
    this.close();
  }

  protected readonly Orientation = Orientation;
}
