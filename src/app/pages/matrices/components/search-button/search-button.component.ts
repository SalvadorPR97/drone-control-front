import {Component, EventEmitter, Output} from '@angular/core';
import {FloatLabelModule} from 'primeng/floatlabel';
import {InputNumberModule} from 'primeng/inputnumber';
import {ButtonDirective} from 'primeng/button';
import {Nullable} from 'primeng/ts-helpers';

@Component({
  selector: 'pages-matrices-search-button',
  standalone: true,
  imports: [
    FloatLabelModule,
    InputNumberModule,
    ButtonDirective
  ],
  templateUrl: './search-button.component.html',
  styleUrl: './search-button.component.css'
})
export class SearchButtonComponent {
  @Output()
  public matrixIdEmitter: EventEmitter<number> = new EventEmitter();

  emitId(id: Nullable<number>): void {
    if (id !== null) {
      this.matrixIdEmitter.emit(id);
    }
  }
}
