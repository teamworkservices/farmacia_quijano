import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Laboratorio } from 'src/app/shared/models/laboratorio';
import { Medicamento } from 'src/app/shared/models/medicamento';
import Swal from 'sweetalert2';
import { LaboratorioService } from '../../../services/laboratorio.service';
import { MedicamentoService } from '../../../services/medicamento.service';

@Component({
  selector: 'app-crear-medicamento',
  templateUrl: './crear-medicamento.component.html',
  styleUrls: ['./crear-medicamento.component.css']
})
export class CrearMedicamentoComponent implements OnInit {
  form: FormGroup;
  laboratorios: Laboratorio[];
  selectedValue: string;
  
  constructor(private fb: FormBuilder, private medicamentoService: MedicamentoService, 
    public dialogRef: MatDialogRef<CrearMedicamentoComponent>,
    private laboratorioService: LaboratorioService) { 
    this.selectedValue = "";
    this.laboratorios = this.laboratorioService.listarLaboratorios();
    this.form = this.fb.group({
      nombreCtrl: ['', [Validators.required, Validators.maxLength(20)]],
      dosificacionCtrl: ['', [Validators.required, Validators.maxLength(20)]],
      codigoBarraCtrl: ['', [Validators.required, Validators.maxLength(20)]],
      codigoCompraCtrl: ['', [Validators.required, Validators.maxLength(20)]],
      cantidadCtrl: ['', [Validators.required, Validators.maxLength(20)]],
      precioCtrl: ['', [Validators.required, Validators.maxLength(20)]],
    })  }

  ngOnInit(): void {
    
  }

  agregarMedicamento(){
    if (this.form.valid) {
      let varMedicamento = new Medicamento();
      varMedicamento.nombre = this.form.value['nombreCtrl'];
      varMedicamento.nomLaboratorio = this.form.value['laboratorio'];
      varMedicamento.nomDosificacion = this.form.value['dosificacionCtrl'];
      varMedicamento.codigoBarra = this.form.value['codigoBarraCtrl'];
      varMedicamento.codigoCompra = this.form.value['codigoCompraCtrl'];
      varMedicamento.cantidad = this.form.value['cantidadCtrl'];
      varMedicamento.precio = this.form.value['precioCtrl'];

      varMedicamento = this.medicamentoService.agregarMedicamento(varMedicamento);
      this.dialogRef.close(varMedicamento);
    }
  }


  confirmModal(){
    Swal.fire({
      title: 'Correcto',
      text: 'Medicamento  creado exitosamente!',
      icon: 'success',
      showConfirmButton: false,
      timer: 2000
    })
  }

}
