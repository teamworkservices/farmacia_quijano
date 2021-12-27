export class Laboratorio {
    id!: number;
    codigo!: string;
    nombre!: string;
  
    public constructor(partial?: Partial<Laboratorio>) {
      Object.assign(this, partial);
    }
}