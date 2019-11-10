import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-hijo',
  template: `
      <p>Origen: {{origen}}</p>
      <p>Nombre: {{nombre}}</p>
      <p>Apellido: {{apellido}}</p>
      <p>Edad: {{edad}}</p>
      <button (click)="mostrarAltura()">Mostrar altura</button>
  `,
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() origen: string;
  @Input() nombre: string;
  @Input() apellido: string;
  // tslint:disable-next-line:no-input-rename
  @Input('alias') edad: number;

  @Output() altura = new EventEmitter();

  constructor() {
    this.origen = 'HijoComponent';
    this.nombre = 'Sin nombre';
    this.apellido = 'Sin apellido';
    this.edad = 0;
  }

  ngOnInit() {
  }

  mostrarAltura() {
    this.altura.emit(100);
  }

}
