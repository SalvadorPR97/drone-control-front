import {Component, EventEmitter, Output} from '@angular/core';
import {FileUploadModule} from 'primeng/fileupload';
import {MessageService} from 'primeng/api';
import {Command} from '../../../../core/interfaces/Command.enum';
import {DroneMove} from '../../../drones/interfaces/DroneMove.interface';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'pages-flying-upload-csv',
  standalone: true,
  imports: [
    FileUploadModule,
    MatIcon
  ],
  templateUrl: './upload-csv.component.html',
  styleUrl: './upload-csv.component.css'
})
export class UploadCsvComponent {

  constructor(public messageService: MessageService) {
  }

  @Output()
  public dronesMovesEmitter: EventEmitter<DroneMove[]> = new EventEmitter();

  file: File | null = null;
  fileName: string = '';

  handleUpload(event: any): void {
    if (event.files && event.files.length > 0) {
      this.file = event.files[0];
      if (this.file) {
        this.fileName = this.file.name;
      }
    }
  }

  handleCSV(): void {
    console.log(this.file);
    if (!this.file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const text = reader.result as string;
      console.log(this.parseCSV(text));
      this.dronesMovesEmitter.emit(this.parseCSV(text));
    };
    reader.readAsText(this.file);
  }

  parseCSV(csv: string): DroneMove[] {
    const lines = csv.split('\n').filter(line => line.trim() !== '');
    const dronesMoves: DroneMove[] = [];
    for (const line of lines) {
      const parts = line.split(',').map(p => p.trim());

      if (parts.length < 2) continue;

      const droneId = Number(parts[0]);
      const ordenes = parts.slice(1) as Command[]; // Asegúrate de que 'Command' es tu tipo

      const droneMove: DroneMove = {
        id: droneId,
        matrizId: 0,
        orden: ordenes
      };
      dronesMoves.push(droneMove);
    }
    return dronesMoves;
  }

}
