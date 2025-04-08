import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Button, ButtonDirective} from 'primeng/button';
import {Nullable} from 'primeng/ts-helpers';
import {Matrix} from '../../interfaces/Matrix.interface';
import {DialogModule} from 'primeng/dialog';

@Component({
  selector: 'pages-matrices-delete-button',
  standalone: true,
  imports: [
    ButtonDirective,
    Button,
    DialogModule
  ],
  templateUrl: './delete-button.component.html',
  styleUrl: './delete-button.component.css'
})
export class DeleteButtonComponent {
  @Output()
  public deleteMatrixEmitter: EventEmitter<number> = new EventEmitter();

  @Input()
  public deletedModal: boolean = false;
  @Input()
  public matrix!: Matrix;

  emitId(id: Nullable<number>): void {
    if (id !== null) {
      this.deleteMatrixEmitter.emit(id);
    }
  }

  reloadPage(): void {
    window.location.reload();
  }
}
