import {Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';
import {ButtonDirective} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {DroneNoId} from '../../interfaces/DroneNoId.interface';
import {FloatLabelModule} from 'primeng/floatlabel';
import {InputNumberModule} from 'primeng/inputnumber';
import {DropdownModule} from 'primeng/dropdown';
import {MatrixService} from '../../../../core/services/matrix.service';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import {Orientation} from '../../../../core/interfaces/Orientation.enum';

@Component({
  selector: 'pages-drones-create-drone',
  standalone: true,
  imports: [
    ButtonDirective,
    DialogModule,
    FormsModule,
    InputTextModule,
    FloatLabelModule,
    InputNumberModule,
    ReactiveFormsModule,
    DropdownModule,
    ToastModule,
  ],
  templateUrl: './create-drone.component.html',
  styleUrl: './create-drone.component.css'
})
export class CreateDroneComponent {
  @Input() visible: boolean = false;
  @Output() createDroneEmitter: EventEmitter<DroneNoId> = new EventEmitter();
  public createDroneForm: FormGroup;
  @Input() matricesIds: number[] = [];
  public orientation: Orientation[] = [Orientation.N,Orientation.S,Orientation.E,Orientation.O];
  @Input() created: boolean = false;


  constructor(private readonly matrixService: MatrixService, private readonly messageService: MessageService,) {
    this.createDroneForm = new FormGroup({
      nombre: new FormControl(null, [Validators.required, Validators.nullValidator]),
      modelo: new FormControl(null, [Validators.required, Validators.nullValidator]),
      x: new FormControl(null, [Validators.required, Validators.min(0)]),
      y: new FormControl(null, [Validators.required, Validators.min(0)]),
      orientacion: new FormControl(null, [Validators.required, Validators.nullValidator, Validators.pattern('N|S|E|O')]),
      matrizId: new FormControl(null, [Validators.required, Validators.nullValidator]),
    });
  }

  ngOnInit(): void {
    this.loadMatrices();
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['created']) {
      this.resetForm();
    }
  }

  loadMatrices(): void {
    this.matrixService.getMatricesIds().subscribe((data) => {
      this.matricesIds = data;
    });
  }

  close() {
    this.visible = false;
  }

  create() {
    if (this.createDroneForm.valid) {
      this.createDroneEmitter.emit(this.createDroneForm.value);
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error creating drone',
        detail: 'Error with form data',
      });
    }
  }

  resetForm() {
    if (this.created){
      this.close();
      this.createDroneForm.reset();
      this.created = false;
    }
  }
}
