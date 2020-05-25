import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Punto1Component } from './components/punto1/punto1.component';
import { PuntosComponent } from './components/puntos/puntos.component';
import { Punto2DataTableComponent } from './components/punto2-data-table/punto2-data-table.component';
import { Punto2Component } from './components/punto2/punto2.component';
import { Punto3Component } from './components/punto3/punto3.component';
import { Punto4Component } from './components/punto4/punto4.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'punto1', component: Punto1Component },
  { path: 'punto2', component: Punto2Component },
  { path: 'puntosinteres', component: PuntosComponent },
  { path: 'punto4', component: Punto4Component },
  { path: 'punto24', component: Punto2DataTableComponent },
  { path: 'punto3', component: Punto3Component },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
