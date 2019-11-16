import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-custom-snack-bar',
  templateUrl: 'custom-snack-bar-component-ok.html'
})
export class CustomSnackBarComponent {
  @Input() texto: string;
}
