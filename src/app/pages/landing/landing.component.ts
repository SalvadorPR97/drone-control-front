import { Component } from '@angular/core';
import {ButtonDirective} from 'primeng/button';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-pages-landing',
  imports: [
    ButtonDirective,
    RouterLink
  ],
  standalone: true,
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
