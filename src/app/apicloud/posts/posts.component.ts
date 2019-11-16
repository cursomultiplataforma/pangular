import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ApicloudService} from '../services/apicloud.service';
import {Post} from '../models/post.model';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {animate, state, style, transition, trigger} from '@angular/animations';

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

  constructor(private apiCloud: ApicloudService) { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    this.apiCloud.getAllPost().subscribe(
      resp => {
        // @ts-ignore
        this.dataSource = new MatTableDataSource<Post[]>(resp.body);
        // @ts-ignore
        this.resultsLength = resp.body.length;
        this.dataSource.paginator = this.paginator;
      },
      err => {
        console.log('Error' + err);
      }
    );
  }
}
