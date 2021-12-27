import { Injectable } from '@angular/core';
import { Laboratorio } from 'src/app/shared/models/laboratorio';

@Injectable({
  providedIn: 'root'
})
export class LaboratorioService {
  laboratorioData: Laboratorio[] = [
    {id: 1, nombre:'Lab Popayan', codigo:'F'},
    {id: 2, nombre:'Lab Cali', codigo:'F'},
    {id: 3, nombre:'Lab Santander', codigo:'F'},
  ];

  constructor() { }

  listarLaboratorios(): Laboratorio[]{
    return this.laboratorioData;
  }

  agregarLaboratorio(prmLaboratorio: Laboratorio):Laboratorio{   
    
    if(this.laboratorioData.length !=0){
      let anterior = this.laboratorioData[this.laboratorioData.length-1].id;
      prmLaboratorio.id = anterior +1;
    }else{
      prmLaboratorio.id = 1;
    }
    
    this.laboratorioData.push(prmLaboratorio);
    return prmLaboratorio;
  }

  editarLaboratorio(prmLaboratorio: Laboratorio):Laboratorio{
    let indexLaboratorio = this.laboratorioData.findIndex(item => item.id == prmLaboratorio.id);
    Object.assign(this.laboratorioData[indexLaboratorio], prmLaboratorio);
    return prmLaboratorio; 
  }

  eliminarLaboratorio(id:number){
    this.laboratorioData = this.laboratorioData.filter(item => item.id != id);
  }
}
