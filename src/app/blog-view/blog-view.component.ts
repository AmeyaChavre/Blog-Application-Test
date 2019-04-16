import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {

  public currentBlog;

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

  constructor(private _route: ActivatedRoute, private router: Router) {
    console.log("Constructor is called.");
  }

  ngOnInit() {
    console.log("ngOnInit() is called.");
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    this.getSingleBlogInformation(myBlogId);
  }

  public getSingleBlogInformation(currentBlogId): any {

    for (let blog of this.allBlogs) {
      if (blog.blogId == currentBlogId) {
        this.currentBlog = blog;
      }
    }
    console.log(this.currentBlog);
  }

}
