import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Dosificacion } from 'src/app/shared/models/dosificacion';

@Component({
  selector: 'app-dosificacion',
  templateUrl: './dosificacion.component.html',
  styleUrls: ['./dosificacion.component.css']
})
export class DosificacionComponent implements OnInit {

  displayedColumns: string[] = ['id','nombre','descripcion','codigo'];
  dosificacionData: Dosificacion[] = [
    {id: 1, nombre: 'Hydrogen', descripcion: 'Descripcion', codigo: 'H'},
    {id: 2, nombre: 'Hydro', descripcion: 'Descripcion', codigo: 'H'},
    {id: 3, nombre: 'Hogen', descripcion: 'Descripcion', codigo: 'H'},
    
  ];

  dataSource!: MatTableDataSource<Dosificacion>
  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Dosificacion>([]);
    this.dataSource.data = this.dosificacionData;
  }

}
