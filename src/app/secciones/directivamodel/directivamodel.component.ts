import { Component, OnInit } from '@angular/core';

export class Vehiculo {
  tipo: string;
  ruedas: number;
  coste: number;
}

@Component({
  selector: 'app-directivamodel',
  templateUrl: './directivamodel.component.html',
  styleUrls: ['./directivamodel.component.css']
})
export class DirectivamodelComponent implements OnInit {

  vehiculo: Vehiculo;

  constructor() {
    this.vehiculo = new Vehiculo();
    this.vehiculo.tipo = 'coche';
    this.vehiculo.ruedas = 4;
    this.vehiculo.coste = 1000;
  }

  ngOnInit() {
  }

  cambiarCoste($eventValue) {
    this.vehiculo.coste = $eventValue;
  }
}
