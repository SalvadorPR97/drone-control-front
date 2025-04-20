import { Routes } from '@angular/router';
import {DronesComponent} from './pages/drones/drones.component';
import {FlyingComponent} from './pages/flying/flying.component';
import {LandingComponent} from './pages/landing/landing.component';
import {MatricesComponent} from './pages/matrices/matrices.component';

export const routes: Routes = [
  { path: '', component: LandingComponent }, // Ruta por defecto
  { path: 'drones', component: DronesComponent }, // Ruta por defecto
  { path: 'matrices', component: MatricesComponent }, // Ruta por defecto
  { path: 'flying', component: FlyingComponent }, // Ruta por defecto
];
