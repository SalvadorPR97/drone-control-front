import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {Toolbar} from 'primeng/toolbar';
import { ButtonDirective} from 'primeng/button';
import { MegaMenuModule } from 'primeng/megamenu';

@Component({
  selector: 'app-core-navbar',
  imports: [
    MegaMenuModule,
    Toolbar,
    ButtonDirective,
    RouterLink,
  ],
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  public items = [
    {
      label: 'Home',
      routerlink: '',
    },
    {
      label: 'Drones',
      routerlink: 'drones',
    },
    {
      label: 'Matrices',
      routerlink: 'matrices',
    },
    {
      label: 'Flying Control',
      routerlink: 'flying',
    },

  ]
}
