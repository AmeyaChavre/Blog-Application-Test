import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public allBlogs = [
    {
      "blogId": "1",
      "lastModified": "2019-01-20T12:20:47.854Z",
      "created": "2019-01-20T12:20:47.854Z",
      "tags": ["Prison","Tim Robbins"],
      "author": "Admin",
      "category": "Prison Drama",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "This is blog 1 body",
      "description": "This is blog 1 description",
      "title": "This is blog 1"
    },
    {
      "blogId": "2",
      "lastModified": "2019-01-20T12:20:47.854Z",
      "created": "2019-01-20T12:20:47.854Z",
      "tags": [],
      "author": "Admin",
      "category": "Prison Drama",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "This is blog 2 body",
      "description": "This is blog 1 description",
      "title": "This is blog 2"
    },
    {
      "blogId": "3",
      "lastModified": "2019-01-20T12:20:47.854Z",
      "created": "2019-01-20T12:20:47.854Z",
      "tags": [],
      "author": "Admin",
      "category": "Prison Drama",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "This is blog 3 body",
      "description": "This is blog 3 description",
      "title": "This is blog 3"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
