import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
//import 'rxjs/add/operator/map';

@Injectable()
export class BlogHttpService {

  public allBlogs;
  public currentBlog;
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
  public authToken = 'MjY3MjQxY2VmYmY4YTJlZjY0NjhlZmFiMGM5MDk3YjQ5NWEwNTYyYjk5NGM5NTBlMGRjNWRhMTNkODhhMTc5MmE4MDY3NTcyZTIyNTE4ZmU3MjdhMWEwYWU4NzU3ZDA3M2Y2NzY5N2RkMTNlZWUwOTA0MWEwNTdjYWY3MGNlNzgzYQ==';

  constructor(private _http: HttpClient) {
    console.log("blog-http service constructor was called");

  }

  private handleError(err: HttpErrorResponse) {
    console.log("Handle Error http calls");
    console.log(err.message);
    return Observable.throw(err.message);
  }

  public getAllBlogs(): any {
    let myResponse = this._http.get(this.baseUrl + '/all?authToken=MjY3MjQxY2VmYmY4YTJlZjY0NjhlZmFiMGM5MDk3YjQ5NWEwNTYyYjk5NGM5NTBlMGRjNWRhMTNkODhhMTc5MmE4MDY3NTcyZTIyNTE4ZmU3MjdhMWEwYWU4NzU3ZDA3M2Y2NzY5N2RkMTNlZWUwOTA0MWEwNTdjYWY3MGNlNzgzYQ==');
    console.log(myResponse);
    return myResponse;
  }

  public getSingleBlogInformation(currentBlogId): any {
    let myResponse = this._http.get(this.baseUrl + '/view' + '/' + currentBlogId + '?authToken=' + this.authToken);
    return myResponse;
  }

}
