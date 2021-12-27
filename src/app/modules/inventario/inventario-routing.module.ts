import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DosificacionComponent } from './components/dosificacion/dosificacion.component';
import { LaboratorioComponent } from './components/laboratorio/laboratorio.component';
import { MedicamentoComponent } from './components/medicamento/medicamento.component';

const routes: Routes = [
  {
    path: 'dosificacion',
    component: DosificacionComponent
  },
  {
    path: 'laboratorio',
    component: LaboratorioComponent
  },
  {
    path: 'medicamento',
    component: MedicamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventarioRoutingModule { }
