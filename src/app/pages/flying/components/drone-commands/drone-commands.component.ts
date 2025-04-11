import {Component, EventEmitter, Output} from '@angular/core';
import {ButtonDirective} from 'primeng/button';
import {MatIcon} from '@angular/material/icon';
import {Command} from '../../../../core/interfaces/Command.enum';

@Component({
  selector: 'pages-flying-drone-commands',
  standalone: true,
  imports: [
    ButtonDirective,
    MatIcon
  ],
  templateUrl: './drone-commands.component.html',
  styleUrl: './drone-commands.component.css'
})
export class DroneCommandsComponent {
  @Output() commandEmitter: EventEmitter<Command> = new EventEmitter();

  emitCommand (command: Command) {
    this.commandEmitter.emit(command);
  }

  protected readonly Command = Command;
}
