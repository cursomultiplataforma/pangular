import {AfterViewInit, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ApicloudService} from '../services/apicloud.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Comment} from '../models/comment.model';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit, AfterViewInit {
  dataSource;
  displayedColumns: string[] = ['id', 'body'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  resultsLength: number;
  // custom snack bar
  mensajeSnackBar: string;
  @ViewChild('snackBarTemplate', {static: true}) snackBarTemplate: TemplateRef<any>;

  constructor(
    private apiCloud: ApicloudService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    this.apiCloud.getAllComments().subscribe(
      resp => {
        // @ts-ignore
        this.dataSource = new MatTableDataSource<Comment[]>(resp.body);
        // @ts-ignore
        this.resultsLength = resp.body.length;
        this.dataSource.paginator = this.paginator;
        this.mensajeSnackBar = 'Datos cargados correctamente';
        this.snackBar.openFromTemplate(this.snackBarTemplate, {
          duration: 2000
        });
      },
      err => {
        this.snackBar.open('Error al cargar los datos: ' + err, 'Error', {
          duration: 2000
        });
      }
    );
  }

}
