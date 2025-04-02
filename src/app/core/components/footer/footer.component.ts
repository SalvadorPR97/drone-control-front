import { Component } from '@angular/core';
import {TableModule} from 'primeng/table';

@Component({
  selector: 'app-core-footer',
  imports: [
    TableModule,
  ],
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  /*isDarkMode = false;

  toggleDarkMode() {
    const element: HTMLElement|null = document.querySelector('html');
    if (element) element.classList.toggle('my-app-dark');
  }*/

}
