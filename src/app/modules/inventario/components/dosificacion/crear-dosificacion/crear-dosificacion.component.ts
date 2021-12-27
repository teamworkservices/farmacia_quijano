import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Dosificacion } from 'src/app/shared/models/dosificacion';
import { DosificacionService } from '../../../services/dosificacion.service';

@Component({
  selector: 'app-crear-dosificacion',
  templateUrl: './crear-dosificacion.component.html',
  styleUrls: ['./crear-dosificacion.component.css']
})
export class CrearDosificacionComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private dosificacionService: DosificacionService, public dialogRef: MatDialogRef<CrearDosificacionComponent>) { 
    this.form = this.fb.group({
      codigoCtrl: ['', [Validators.required, Validators.maxLength(3)]],
      nombreCtrl: ['', [Validators.required, Validators.maxLength(20)]],
    })
  }

  ngOnInit(): void {
  }

  agregarDosificacion(){
    if (this.form.valid) {
      let dosificacion = new Dosificacion();
      dosificacion.codigo = this.form.value['codigoCtrl'];
      dosificacion.nombre = this.form.value['nombreCtrl'];

      dosificacion = this.dosificacionService.agregarDosificacion(dosificacion);
      this.dialogRef.close(dosificacion);
    }
  }

  confirmModal(){
    
  }

}
