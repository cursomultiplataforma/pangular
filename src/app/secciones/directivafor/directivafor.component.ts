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
  datosRow: Array<{name: string, altura: number}> = [];

  constructor() {
    this.datosNumericos = [4, 2, 22 , 3];
    this.datosMixtos = [12 , 'Hola', 6];
    this.datosAsociativos = [
      {value: 7, tipo: 'Aa'},
      {value: 2, tipo: 'Bb'},
    ];
    this.datosRow.push({name: 'Daniel', altura: 180});
    this.datosRow.push({name: 'Superman', altura: 200});
  }

  ngOnInit() {
  }
}
