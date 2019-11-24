import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-modalpost',
  templateUrl: './modalpost.component.html',
  styleUrls: ['./modalpost.component.css']
})
export class ModalpostComponent { // implements OnInit{

  constructor(
    // public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public datosInput: any
  ) {}

  /* ngOnInit() {
    console.log(this.datosInput);
    console.log(this.datosInput.datos);
  } */

  /* onNoClick(): void {
    this.dialogRef.close();
  } */
}
