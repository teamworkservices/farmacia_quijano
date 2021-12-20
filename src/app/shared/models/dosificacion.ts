export class Dosificacion {
    id!: number;
    codigo!: string;
    nombre!: string;
    descripcion!: string;
  
    public constructor(partial?: Partial<Dosificacion>) {
      Object.assign(this, partial);
    }
}