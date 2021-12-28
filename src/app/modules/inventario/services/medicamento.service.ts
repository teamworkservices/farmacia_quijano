import { Injectable } from '@angular/core';
import { Medicamento } from 'src/app/shared/models/medicamento';

@Injectable({
  providedIn: 'root'
})
export class MedicamentoService {

  medicamentoData: Medicamento[] = [
    {idMedicamento: 11, codigoCompra: "codC1", codigoBarra:"cobB1",nombre:'Acetaminofen', nomLaboratorio:'Lab Cali', cantidad:2, precio:2000, nomDosificacion:"Hdro"},
    {idMedicamento: 12, codigoCompra: "codC2", codigoBarra:"cobB2",nombre:'Atorvastatina', nomLaboratorio:'Lab Popayan', cantidad:5, precio:12000, nomDosificacion:"Hdro"},
    {idMedicamento: 13, codigoCompra: "codC3", codigoBarra:"cobB3",nombre:'Dolex', nomLaboratorio:'Lab Santander', cantidad:1, precio:25000, nomDosificacion:"Hdro"},
  ];

  constructor() { }

  listarMedicamentos(): Medicamento[]{
    return this.medicamentoData;
  }

  agregarMedicamento(prmMedicamento: Medicamento):Medicamento{   
    
    if(this.medicamentoData.length !=0){
      let anterior = this.medicamentoData[this.medicamentoData.length-1].idMedicamento;
      prmMedicamento.idMedicamento = anterior +1;
    }else{
      prmMedicamento.idMedicamento = 1;
    }
    
    this.medicamentoData.push(prmMedicamento);
    return prmMedicamento;
  }

  editarMedicamento(prmMedicamento: Medicamento):Medicamento{
    let indexMedicamento = this.medicamentoData.findIndex(item => item.idMedicamento == prmMedicamento.idMedicamento);
    Object.assign(this.medicamentoData[indexMedicamento], prmMedicamento);
    return prmMedicamento; 
  }

  eliminarMedicamento(id:number){
    this.medicamentoData = this.medicamentoData.filter(item => item.idMedicamento != id);
  }
}
