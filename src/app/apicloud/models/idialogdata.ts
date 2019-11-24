import {Comment} from './comment.model';

export class IDatosDialogo {
  constructor(nameInterface: string, idInterface: number, datosInterface: Comment[]) {
    this.nameInterface = nameInterface;
    this.idInterface = idInterface;
    this.datosInterface = datosInterface;
  }

  nameInterface: string;
  idInterface: number;
  datosInterface: Comment[];
}
