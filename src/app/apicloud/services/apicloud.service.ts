import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Comment} from '../models/comment.model';
import {Post} from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class ApicloudService {

  constructor(private http: HttpClient) { }

  private static crearHeaders() {
    const options: any = {
      responseType: 'json',
      observe: 'response'
    };
    return options;
  }

  getAllPost() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts', ApicloudService.crearHeaders());
  }

  getAllComments() {
    return this.http.get<Comment>('https://jsonplaceholder.typicode.com/comments', ApicloudService.crearHeaders());
  }
}
