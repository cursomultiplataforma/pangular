import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivafor',
  templateUrl: './directivafor.component.html',
  styleUrls: ['./directivafor.component.css']
})
export class DirectivaforComponent implements OnInit {

  datosNumericos: number[];
  datosMixtos: any[];
  datosAsociativos;
  datosInit = 1;

  constructor() {
    this.datosNumericos = [4, 2, 22 , 3];
    this.datosMixtos = [12 , 'Hola', 6];
    this.datosAsociativos = [
      {value: 7, tipo: 'Aa'},
      {value: 2, tipo: 'Bb'},
    ];
  }

  ngOnInit() {
  }
}
