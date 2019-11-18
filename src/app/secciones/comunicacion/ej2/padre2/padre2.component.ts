import {Component, DoCheck, OnInit, ViewChild} from '@angular/core';
import {Hijo2Component} from '../hijo2/hijo2.component';

@Component({
  selector: 'app-padre2',
  templateUrl: './padre2.component.html',
  styleUrls: ['./padre2.component.css']
})
export class Padre2Component implements OnInit, DoCheck {
  // string al hijo via input
  mensajePadreAlHijoViaInput = 'hola hijo';

  // string al hijo via viewchild
  @ViewChild(Hijo2Component, {static: true}) hijo;
  mensajeAlPadreDeHijoViewChild = '';

  // string al hijo via Output
  mensajeAlPadreDeHijoOutput = '';

  constructor() { }

  ngOnInit() { }

  ngDoCheck() {
    this.mensajeAlPadreDeHijoViewChild = this.hijo.mensajeDelHijoAlPadreViewChild;
  }

  recibirMensaje($event) {
    this.mensajeAlPadreDeHijoOutput = $event;
  }
}
