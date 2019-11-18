import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivafor',
  templateUrl: './directivafor.component.html',
  styleUrls: ['./directivafor.component.css']
})
export class DirectivaforComponent implements OnInit {

  datosInit = 1;
  datosNumericos: number[];
  datosMixtos: any[];
  datosAsociativos;
  datosRow: Array<{name: string, altura: number}> = [];
  tupla: [string, number];
  arrayTupla: [string, number][];

  constructor() {
    this.datosNumericos = [4, 2, 22 , 3];
    this.datosMixtos = [12 , 'Hola', 6];
    this.datosAsociativos = [
      {value: 7, tipo: 'Aa'},
      {value: 2, tipo: 'Bb'},
    ];
    this.datosRow.push({name: 'Daniel', altura: 180});
    this.datosRow.push({name: 'Superman', altura: 200});
    this.tupla = ['Daniel', 100];
    this.arrayTupla = [
      ['A', 1],
      ['C', 3],
      ['B', 2],
    ];
  }

  ngOnInit() {
  }
}
