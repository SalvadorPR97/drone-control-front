import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Button],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isDarkMode = false;

  toggleDarkMode() {
    const element: HTMLElement|null = document.querySelector('html');
    if (element) element.classList.toggle('my-app-dark');
  }
}
