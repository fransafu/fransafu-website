import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface IPostResponse {
  code: number;
  meta: Meta;
  data: Datum[];
}

export interface Datum {
  id:         number;
  user_id:    number;
  title:      string;
  body:       string;
  created_at: Date;
  updated_at: Date;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  total: number;
  pages: number;
  page:  number;
  limit: number;
}


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient,
  ) { }

  public getPosts(): Observable<IPostResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    return this.http.get<IPostResponse>("https://gorest.co.in/public-api/posts", httpOptions);
  }
}
