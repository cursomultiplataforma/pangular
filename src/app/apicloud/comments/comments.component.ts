import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ApicloudService} from '../services/apicloud.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Comment} from '../models/comment.model';

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

  constructor(private apiCloud: ApicloudService) { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    this.apiCloud.getAllComments().subscribe(
      resp => {
        // @ts-ignore
        this.dataSource = new MatTableDataSource<Comment[]>(resp.body);
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
