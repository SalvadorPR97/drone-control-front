import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Button, ButtonDirective} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {FloatLabelModule} from 'primeng/floatlabel';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {InputNumberModule} from 'primeng/inputnumber';
import {Matrix} from '../../interfaces/Matrix.interface';
import {MatrixDTO} from '../../interfaces/MatrixDTO.interface';

@Component({
  selector: 'pages-matrices-form-update',
  standalone: true,
  imports: [
    Button,
    ButtonDirective,
    DialogModule,
    FloatLabelModule,
    FormsModule,
    InputNumberModule,
    ReactiveFormsModule
  ],
  templateUrl: './form-update.component.html',
  styleUrl: './form-update.component.css'
})
export class FormUpdateComponent {
  @Output()
  public updateMatrixEmitter: EventEmitter<MatrixDTO> = new EventEmitter();
  @Input()
  public updatedModal!: boolean;
  @Input()
  public matrix!: Matrix;

  updateMatrixForm!: FormGroup;

  ngOnInit() {
    this.updateMatrixForm = new FormGroup({
      max_x: new FormControl(this.matrix.max_x, [Validators.required, Validators.min(0)]),
      max_y: new FormControl(this.matrix.max_y, [Validators.required, Validators.min(0)]),
    });
  }

  onSubmit() {
    if (this.updateMatrixForm.valid) {
      this.updateMatrixForm.setControl('id', new FormControl(this.matrix.id));
      this.updateMatrixEmitter.emit(this.updateMatrixForm.value);
    } else {
      console.log(this.updateMatrixForm.value);
      console.log('Formulario inválido');
    }
  }
}
