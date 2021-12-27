export class Medicamento {
    idMedicamento!: number;
    codigoCompra!: string;
    codigoBarra!: string;
    nombre!: string;
    nomLaboratorio !:string;
    cantidad !:number;
    precio!: number;
    nomDosificacion !:string;

    public constructor(partial?: Partial<Medicamento>) {
      Object.assign(this, partial);
    }
}