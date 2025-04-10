import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Button, ButtonDirective} from 'primeng/button';
import {Nullable} from 'primeng/ts-helpers';
import {Matrix} from '../../interfaces/Matrix.interface';
import {DialogModule} from 'primeng/dialog';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'pages-matrices-delete-button',
  standalone: true,
  imports: [
    ButtonDirective,
    Button,
    DialogModule,
    MatIcon
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
  @Input()
  public title: string = "";
  @Input()
  public subtitle: string = "";

  emitId(id: Nullable<number>): void {
    if (id !== null) {
      this.deleteMatrixEmitter.emit(id);
      window.location.reload();
    }
  }

  reloadPage(): void {
    window.location.reload();
  }
}
