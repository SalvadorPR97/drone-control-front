import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TabViewModule} from 'primeng/tabview';


@Component({
  selector: 'app-pages-matrices',
  imports: [
    FormsModule,
    TabViewModule,
  ],
  standalone: true,
  templateUrl: './matrices.component.html',
  styleUrl: './matrices.component.css'
})
export class MatricesComponent {

}
