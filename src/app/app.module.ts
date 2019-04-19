import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule,Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { BlogService } from './blog.service';
import { BlogHttpService } from './blog-http.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    BlogCreateComponent,
    BlogViewComponent,
    BlogEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {path:'home',component:HomeComponent},
        {path:'',redirectTo:'home',pathMatch:'full'},
        {path:'about',component:AboutComponent},
        {path:'blog/:blogId',component:BlogViewComponent},
        {path:'create',component:BlogCreateComponent},
        {path:'edit/blogId',component:BlogEditComponent},
        {path:'**',component:NotFoundComponent}
      ]
    )
  ],
  providers: [BlogService,BlogHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
