import { Injectable } from '@angular/core';

@Injectable()
export class BlogService {

  public allBlogs = [
    {
      "blogId": "1",
      "lastModified": "2019-01-20T12:20:47.854Z",
      "created": "2019-01-20T12:20:47.854Z",
      "tags": ["Prison", "Tim Robbins"],
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

  public currentBlog;

  constructor() {
    console.log("Service Constructor is called.");
  }

  public getAllBlogs():any {
    return this.allBlogs;
  }

  public getSingleBlogInformation(currentBlogId): any {

    for (let blog of this.allBlogs) {
      if (blog.blogId == currentBlogId) {
        this.currentBlog = blog;
      }
    }
    console.log(this.currentBlog);
  return this.currentBlog;
  }

}
