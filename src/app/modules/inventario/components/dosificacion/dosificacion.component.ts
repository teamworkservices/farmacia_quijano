import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Dosificacion } from 'src/app/shared/models/dosificacion';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CrearDosificacionComponent } from './crear-dosificacion/crear-dosificacion.component';
import { DosificacionService } from '../../services/dosificacion.service';

@Component({
  selector: 'app-dosificacion',
  templateUrl: './dosificacion.component.html',
  styleUrls: ['./dosificacion.component.css']
})
export class DosificacionComponent implements OnInit {

  displayedColumns: string[] = ['id','nombre','codigo'];
  

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

  loadDosificacion (){
    return this.dosificacionService.getDosificaciones();
  }

  loadTableDosificacion(){
    this.dataSource = new MatTableDataSource<Dosificacion>([]);
    this.dataSource.data = this.loadDosificacion();
  }
}
