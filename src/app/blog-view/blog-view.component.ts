import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';
//import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';


@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers: [Location]
})


export class BlogViewComponent implements OnInit, OnDestroy {

  public currentBlog;

  constructor(private _route: ActivatedRoute, private router: Router, public blogService: BlogService, public blogHttpService: BlogHttpService, private toastr: ToastrService, private location: Location) {
    console.log("Blog - View Component Constructor is called.");
    //this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    console.log("Blog - View Component ngOnInit is called.");
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    //this.currentBlog = this.blogService.getSingleBlogInformation(myBlogId);
    //console.log(this.currentBlog);
    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(
      data => {
        console.log(data);
        this.currentBlog = data["data"];
      },
      error => {
        console.log("some error occured.");
        console.log(error.errorMessage);
      }
    )

  }

  public deleteThisBlog(): any {

    this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(
      data => {

        console.log(data);
        this.toastr.success("Blog Deleted Succssfully", "Success!");
        setTimeout( () => {
          this.router.navigate(['/home']);
        }, 2000)

      },
      error => {
        console.log("Some Error Occured");
        console.log(error.errorMessage);
        this.toastr.error("Some Error Occured", "Error");
      }
    )

  }

  public goBackToPreviousPage() : any {

    this.location.back();
  
  } 

  ngOnDestroy() {
    console.log("Blog - View Component ngOnDestroy is called.");
  }



}
