import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import { ActivatedRoute, Router } from '@angular/router';
//import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})

export class BlogCreateComponent implements OnInit {

  constructor(private blogHttpService: BlogHttpService, private _route: ActivatedRoute, private router: Router, private toastr: ToastrService)
   { 
   }

  public blogTitle: string;
  public blogBodyHtml: string;
  public blogDescription: string;
  public blogCategory: string;
  public possibleCategories = ["Comedy", "Drama", "Action", "Techonology"];

  ngOnInit() {
  }

  public createBlog(): any {

    let blogData = {

      title: this.blogTitle,
      description: this.blogDescription,
      blogBody: this.blogBodyHtml,
      category: this.blogCategory

    }

    console.log(blogData);

    this.blogHttpService.createBlog(blogData).subscribe(

      data => {
        console.log("Blog Created");
        console.log(data);
        
        //alert("Blog Posted Successfully");
        this.toastr.success("Blog Posted Successfully", "Success!");

        setTimeout( () => {
          this.router.navigate(['/blog',data.data.blogId]);
        }, 2000)

      },
      error => {
        console.log("Some Error Occured");
        console.log(error.errorMessage);
        //alert("Some Error Occured");
        this.toastr.error("Some Error Occured", "Error");
      }
    )
  }

}
