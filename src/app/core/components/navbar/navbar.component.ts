import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonDirective} from 'primeng/button';
import { MegaMenuModule } from 'primeng/megamenu';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-core-navbar',
  imports: [
    MegaMenuModule,
    ButtonDirective,
    RouterLink,
    ToolbarModule,
    MatIcon,
  ],
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
