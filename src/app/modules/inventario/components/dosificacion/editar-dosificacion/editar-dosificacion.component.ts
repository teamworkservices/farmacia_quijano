import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Dosificacion } from 'src/app/shared/models/dosificacion';
import Swal from 'sweetalert2';
import { DosificacionService } from '../../../services/dosificacion.service';

@Component({
  selector: 'app-editar-dosificacion',
  templateUrl: './editar-dosificacion.component.html',
  styleUrls: ['./editar-dosificacion.component.css']
})
export class EditarDosificacionComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, 
              private dosificacionService: DosificacionService,
              public dialogRef: MatDialogRef<EditarDosificacionComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Dosificacion) {
              
    this.form = this.fb.group({
      codigoCtrl: [data.codigo, [Validators.required, Validators.maxLength(3)]],
      nombreCtrl: [data.nombre, [Validators.required, Validators.maxLength(20)]],
    })
  }

  ngOnInit(): void {
  }

  editarDosificacion(){
    if (this.form.valid) {
      let dosificacion = new Dosificacion();
      dosificacion.id = this.data.id;
      dosificacion.codigo = this.form.value['codigoCtrl'];
      dosificacion.nombre = this.form.value['nombreCtrl'];

      Object.assign(dosificacion, this.dosificacionService.editarDosificacion(dosificacion));
      this.dialogRef.close(dosificacion);
    }
  }

  confirmModal(){
    Swal.fire({
      title: 'Correcto',
      text: 'Dosificación actualizada exitosamente!',
      icon: 'success',
      showConfirmButton: false,
      timer: 2000
    })
  }


}
