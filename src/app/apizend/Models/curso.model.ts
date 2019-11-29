export class Curso {
  id: number;
  nombre: string;
  descripcion: string;
  capacidad: string;

  constructor (id: number, nombre: string, descripcion: string, capacidad: string) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.capacidad = capacidad;
  }

}
