import {Component, EventEmitter, Output} from '@angular/core';
import {Command} from '../../../../core/interfaces/Command.enum';
import {OrderListModule} from 'primeng/orderlist';
import {DroneCommandsComponent} from '../drone-commands/drone-commands.component';
import {CommandInterface} from '../../../../core/interfaces/Command.interface';
import {ButtonDirective} from 'primeng/button';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'pages-flying-command-list-exec',
  standalone: true,
  imports: [
    OrderListModule,
    DroneCommandsComponent,
    ButtonDirective,
    MatIcon
  ],
  templateUrl: './command-list-exec.component.html',
  styleUrl: './command-list-exec.component.css'
})
export class CommandListExecComponent {
  public commands: CommandInterface[] = [];
  private idCounter: number = 0;
  @Output()
  public executeEmitter: EventEmitter<Command[]> = new EventEmitter();
  public selectedCommands: CommandInterface[] = [];

  addCommand(command: Command) {
    this.commands = [...this.commands, {id: this.idCounter,command:command}];
    this.idCounter++;
  }
  emitCommands() {
    let cleanCommands: Command[] = [];
    this.commands.forEach((command: CommandInterface) => {
      cleanCommands.push(command.command);
    })
    this.executeEmitter.emit(cleanCommands);
  }
  deleteCommand() {
    this.selectedCommands.forEach((command: CommandInterface) => {
      this.commands.splice(this.commands.indexOf(command), 1);
    })
    this.commands = [...this.commands];
  }
  deleteAllCommands() {
    this.commands = [];
  }
}
