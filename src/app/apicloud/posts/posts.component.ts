import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ApicloudService} from '../services/apicloud.service';
import {Post} from '../models/post.model';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, AfterViewInit {
  dataSource;
  displayedColumns: string[] = ['id', 'title'];

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
