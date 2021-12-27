import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Dosificacion } from 'src/app/shared/models/dosificacion';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CrearDosificacionComponent } from './crear-dosificacion/crear-dosificacion.component';
import { DosificacionService } from '../../services/dosificacion.service';
import Swal from 'sweetalert2';
import { EditarDosificacionComponent } from './editar-dosificacion/editar-dosificacion.component';

@Component({
  selector: 'app-dosificacion',
  templateUrl: './dosificacion.component.html',
  styleUrls: ['./dosificacion.component.css']
})
export class DosificacionComponent implements OnInit {

  displayedColumns: string[] = ['id','nombre','codigo','acciones'];
  

  dataSource!: MatTableDataSource<Dosificacion>
  constructor(public dialog: MatDialog, public dosificacionService:DosificacionService) { }

  ngOnInit(): void {
    this.loadTableDosificacion();
  }

  openCreateDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "50%";
    dialogConfig.panelClass = "dialog-custom";
    const dialogRef = this.dialog.open(CrearDosificacionComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      if (!!result) {
        this.loadDosificacion();
        this.loadTableDosificacion();
      }
    });
  }

  openEditDialog(dosificacion: Dosificacion){
    
    const dialogRef = this.dialog.open(EditarDosificacionComponent, {
      width: "50%",
      data: dosificacion,
      panelClass: 'dialog-custom'
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (!!result) {
        this.loadDosificacion();
        this.loadTableDosificacion();
      }
    });
  }

  loadDosificacion (){
    return this.dosificacionService.getDosificaciones();
  }

  loadTableDosificacion(){
    this.dataSource = new MatTableDataSource<Dosificacion>([]);
    this.dataSource.data = this.loadDosificacion();
  }

  eliminarDosificacion(dosificacion: Dosificacion){

    Swal.fire({
      title: '¿Deseas eliminar la dosificación?',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.dosificacionService.eliminarDosificacion(dosificacion.id);
        this.loadTableDosificacion();
        Swal.fire('Saved!', '', 'success')
      }
    })

  }
}
