import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeudasRoutingModule } from './deudas-routing.module';
import { ListaDeudasComponent } from './pages/lista-deudas/lista-deudas.component';
import { PersonasComponent } from './pages/personas/personas.component';
import { DrawerComponent } from './pages/drawer/drawer.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListaDeudasComponent,
    PersonasComponent,
    DrawerComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    DeudasRoutingModule,
    ReactiveFormsModule
  ]
})
export class DeudasModule { }
