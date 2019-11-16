import {AfterViewInit, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ApicloudService} from '../services/apicloud.service';
import {Post} from '../models/post.model';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class PostsComponent implements OnInit, AfterViewInit {
  dataSource;
  columnsToDisplay: string[] = ['id', 'title'];
  expandedElement: Post | null;
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
    this.apiCloud.getAllPost().subscribe(
      resp => {
        // @ts-ignore
        this.dataSource = new MatTableDataSource<Post[]>(resp.body);
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

  filterTitle(value) {
    this.dataSource.filter = value;
    /*this.dataSource.filterPredicate = (data: Post, filter: string) => {
      // tslint:disable-next-line:triple-equals
      return data.title == filter;
    };*/
  }
}
