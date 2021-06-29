import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public posts: any[];

  constructor() {
    this.posts = [
      {
        img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        content: 'hasdjkahskldjklasdjkljd kasjhdklasjdlñksjalñkd sahdlkasjdklsajd askjdhaslkjjdklsaj salkjdklasjdklasjdl lkajsdkljasdklasjkd'
      },
      {
        img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        content: 'hasdjkahskldjklasdjkljd kasjhdklasjdlñksjalñkd sahdlkasjdklsajd askjdhaslkjjdklsaj salkjdklasjdklasjdl lkajsdkljasdklasjkd'
      },
      {
        img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        content: 'hasdjkahskldjklasdjkljd kasjhdklasjdlñksjalñkd sahdlkasjdklsajd askjdhaslkjjdklsaj salkjdklasjdklasjdl lkajsdkljasdklasjkd'
      },
      {
        img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        content: 'hasdjkahskldjklasdjkljd kasjhdklasjdlñksjalñkd sahdlkasjdklsajd askjdhaslkjjdklsaj salkjdklasjdklasjdl lkajsdkljasdklasjkd'
      }
    ]
  }

  ngOnInit(): void {
  }

}
