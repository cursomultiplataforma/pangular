import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  origenPadre: string;
  nombrePadre: string;
  apellidoPadre: string;
  edadPadre: number;

  constructor() {
    this.origenPadre = 'PadreComponente';
    this.nombrePadre = 'Daniel';
    this.apellidoPadre = 'Pérez';
    this.edadPadre = 31;
  }

  ngOnInit() {
  }

  functionMostrarAltura(value) {
    alert('La altura del padre de de ' + value);
  }
}
