import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {InputNumberModule} from 'primeng/inputnumber';
import {FloatLabelModule} from 'primeng/floatlabel';
import {Button, ButtonDirective} from 'primeng/button';
import {MatrixEntrada} from '../../interfaces/MatrixEntrada.interface';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';

@Component({
  selector: 'pages-matrices-form-create',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputNumberModule,
    FloatLabelModule,
    ButtonDirective,
    DialogModule,
    Button,
    InputTextModule
  ],
  templateUrl: './form-create.component.html',
  styleUrl: './form-create.component.css'
})
export class FormCreateComponent {
  @Output()
  public createMatrixEmitter: EventEmitter<MatrixEntrada> = new EventEmitter();
  @Input()
  public visible!: boolean;
  createMatrixForm: FormGroup;

  constructor() {
    this.createMatrixForm = new FormGroup({
      max_x: new FormControl(null, [Validators.required, Validators.min(0)]),
      max_y: new FormControl(null, [Validators.required, Validators.min(0)]),
    });
  }

  closeModal() {
    window.location.reload();
  }
  onSubmit() {
    if (this.createMatrixForm.valid) {
      this.createMatrixEmitter.emit(this.createMatrixForm.value);
    } else {
      console.log(this.createMatrixForm.value);
      console.log('Formulario inválido');
    }
  }
}
