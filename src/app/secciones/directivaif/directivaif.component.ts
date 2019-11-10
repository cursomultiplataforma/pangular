import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivaif',
  templateUrl: './directivaif.component.html',
  styleUrls: ['./directivaif.component.css']
})
export class DirectivaifComponent implements OnInit {

  constructor() { }

  mostrar = true;

  ngOnInit() {
  }

  cambiarEstado() {
    this.mostrar = !this.mostrar;
  }
}
