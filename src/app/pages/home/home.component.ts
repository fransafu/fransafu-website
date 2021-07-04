import { Component, OnInit } from '@angular/core';
import { IPostResponse, PostService } from 'src/app/shared/service/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public postsDataSource: IPostResponse | null = null;

  constructor(
    private _postService: PostService,
  ) { }

  ngOnInit(): void {
    this._postService.getPosts()
      .subscribe(
        (data) => {
          this.postsDataSource = data;
        },
        (error) => {
          console.error(error);
        }
      )
  }

}
