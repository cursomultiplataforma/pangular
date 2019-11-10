import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivaswitch',
  templateUrl: './directivaswitch.component.html',
  styleUrls: ['./directivaswitch.component.css']
})
export class DirectivaswitchComponent implements OnInit {

  numero = 0;

  constructor() { }

  ngOnInit() {
  }

  cambiarValor(value) {
    this.numero = value;
  }
}
