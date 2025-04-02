import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Button} from 'primeng/button';
import {NavbarComponent} from './core/components/navbar/navbar.component';
import {FooterComponent} from './core/components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Button, NavbarComponent, FooterComponent],
  standalone: true,
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
