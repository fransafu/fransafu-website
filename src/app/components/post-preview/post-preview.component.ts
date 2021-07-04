import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.scss']
})
export class PostPreviewComponent implements OnInit {
  @Input() img: string = '';
  @Input() title: string = '';
  @Input() content: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
