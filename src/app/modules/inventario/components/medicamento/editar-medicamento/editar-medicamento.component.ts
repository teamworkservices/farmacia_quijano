import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Medicamento } from 'src/app/shared/models/medicamento';
import Swal from 'sweetalert2';
import { MedicamentoService } from '../../../services/medicamento.service';

@Component({
  selector: 'app-editar-medicamento',
  templateUrl: './editar-medicamento.component.html',
  styleUrls: ['./editar-medicamento.component.css']
})
export class EditarMedicamentoComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, 
              private medicamentoService: MedicamentoService,
              public dialogRef: MatDialogRef<EditarMedicamentoComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Medicamento) {
              
    this.form = this.fb.group({
      nombreCtrl: [data.nombre, [Validators.required, Validators.maxLength(20)]],
      laboratorioCtrl: [data.nomLaboratorio, [Validators.required, Validators.maxLength(20)]],
      dosificacionCtrl: [data.nomDosificacion, [Validators.required, Validators.maxLength(20)]],
      codigoBarraCtrl: [data.codigoBarra, [Validators.required, Validators.maxLength(20)]],
      codigoCompraCtrl: [data.codigoCompra, [Validators.required, Validators.maxLength(20)]],
      cantidadCtrl: [data.cantidad, [Validators.required, Validators.maxLength(20)]],
      precioCtrl: [data.precio, [Validators.required, Validators.maxLength(20)]],
    })
  }

  ngOnInit(): void {
  }

  editarMedicamento(){
    if (this.form.valid) {
      let varMedicamento = new Medicamento();
      varMedicamento.idMedicamento = this.data.idMedicamento;
      varMedicamento.nombre = this.form.value['nombreCtrl'];
      varMedicamento.nomLaboratorio = this.form.value['laboratorioCtrl'];
      varMedicamento.nomDosificacion = this.form.value['dosificacionCtrl'];
      varMedicamento.codigoBarra = this.form.value['codigoBarraCtrl'];
      varMedicamento.codigoCompra = this.form.value['codigoCompraCtrl'];
      varMedicamento.cantidad = this.form.value['cantidadCtrl'];
      varMedicamento.precio = this.form.value['precioCtrl'];

      Object.assign(varMedicamento, this.medicamentoService.editarMedicamento(varMedicamento));
      this.dialogRef.close(varMedicamento);
    }
  }

  confirmModal(){
    Swal.fire({
      title: 'Correcto',
      text: 'Medicamento actualizada exitosamente!',
      icon: 'success',
      showConfirmButton: false,
      timer: 2000
    })
  }

}
