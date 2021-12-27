import { Injectable } from '@angular/core';
import { Dosificacion } from 'src/app/shared/models/dosificacion';

@Injectable({
  providedIn: 'root'
})
export class DosificacionService {

  dosificacionData: Dosificacion[] = [
    {id: 1, nombre: 'Hydrogen', descripcion: 'Descripcion', codigo: 'H'},
    {id: 2, nombre: 'Hdro', descripcion: 'ututut', codigo: 'H'},
    {id: 3, nombre: 'Hogen', descripcion: 'kjksss', codigo: 'H'},
  ];

  constructor() { }

  //getDosificaciones(): Observable<Dosificacion[]> {
  getDosificaciones(): Dosificacion[] {
    //return this.http.get<Dosificacion[]>(environment.urlServer+'dosificacion/listar');
    return this.dosificacionData;
  }

  //agregarDosificacion(dosificacion: Dosificacion):Observable<Dosificacion> {
  agregarDosificacion(dosificacion: Dosificacion):Dosificacion {
    //return this.http.post<Dosificacion>(environment.urlServer+'dosificacion/agregar', dosificacion);
    dosificacion.id = this.dosificacionData.length+1;
    this.dosificacionData.push(dosificacion);
    return dosificacion;
  }

  editarDosificacion(dosificacion: Dosificacion):Dosificacion{
    let indexDosificacion = this.dosificacionData.findIndex(item => item.id == dosificacion.id);
    Object.assign(this.dosificacionData[indexDosificacion], dosificacion);
    return dosificacion;
  }

  eliminarDosificacion(id:number){
    this.dosificacionData = this.dosificacionData.filter(item => item.id != id);
  }
}
