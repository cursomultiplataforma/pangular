import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-hijo2',
  templateUrl: './hijo2.component.html',
  styleUrls: ['./hijo2.component.css']
})
export class Hijo2Component implements OnInit {
  @Input() mensajeAlHijoDePadreViaInput;
  mensajeDelHijoAlPadreViewChild = 'Hola papa, te saludo desde viewchild';
  @Output() mensajeAlPadreEvento = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  enviarMensajeAlPadre() {
    this.mensajeAlPadreEvento.emit('Hola papa, me comunico por eventos');
  }
}
