import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Laboratorio } from 'src/app/shared/models/laboratorio';
import Swal from 'sweetalert2';
import { LaboratorioService } from '../../../services/laboratorio.service';

@Component({
  selector: 'app-editar-laboratorio',
  templateUrl: './editar-laboratorio.component.html',
  styleUrls: ['./editar-laboratorio.component.css']
})
export class EditarLaboratorioComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, 
              private laboratorioService: LaboratorioService,
              public dialogRef: MatDialogRef<EditarLaboratorioComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Laboratorio) {
              
    this.form = this.fb.group({
      codigoCtrl: [data.codigo, [Validators.required, Validators.maxLength(3)]],
      nombreCtrl: [data.nombre, [Validators.required, Validators.maxLength(20)]],
    })
  }

  ngOnInit(): void {
  }

  editarLaboratorio(){
    if (this.form.valid) {
      let varLaboratorio = new Laboratorio();
      varLaboratorio.id = this.data.id;
      varLaboratorio.codigo = this.form.value['codigoCtrl'];
      varLaboratorio.nombre = this.form.value['nombreCtrl'];

      Object.assign(varLaboratorio, this.laboratorioService.editarLaboratorio(varLaboratorio));
      this.dialogRef.close(varLaboratorio);
    }
  }

  confirmModal(){
    Swal.fire({
      title: 'Correcto',
      text: 'Laboratorio actualizada exitosamente!',
      icon: 'success',
      showConfirmButton: false,
      timer: 2000
    })
  }

}
