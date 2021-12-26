import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventarioRoutingModule } from './inventario-routing.module';
import { DosificacionComponent } from './components/dosificacion/dosificacion.component';
import { SharedModule } from '../../shared/shared.module';
import { CrearDosificacionComponent } from './components/dosificacion/crear-dosificacion/crear-dosificacion.component';

@NgModule({
  declarations: [
    DosificacionComponent,
    CrearDosificacionComponent
  ],
  imports: [
    CommonModule,
    InventarioRoutingModule,
    SharedModule
  ]
})
export class InventarioModule { }
