import { Component } from '@angular/core';
import { Blog } from './blog';
import { Http, Response } from '@angular/http';
import '../rxjs-operators';
import { BlogService } from "./blog.service";
import { Router, ActivatedRoute, Params} from '@angular/router'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [BlogService]
})
export class BlogComponent {
  isSubmitted: boolean = false;
  title = 'MEAN app with Angular2';
  model = new Blog("", "", "");
  specificRoom: string;
  public blogMessages = [];

  constructor (private http: Http,
               private blogService: BlogService,
               private route: ActivatedRoute) {}

  submitBlog() {
      this.model = new Blog(this.model.msg, this.model.username, this.specificRoom)
       this.blogService.addBlog(this.model)
      .subscribe(
        blogMsg => {
          console.log("Messages:");
          this.model = blogMsg;
          this.getBlogs(this.specificRoom);
        },
        error =>  this.title = <any>error
      );
  }

  getBlogs(specificRoom) {
    console.log("TESTTHISSHIIIT" + this.specificRoom);
      this.blogService.getBlogs(specificRoom)
      .subscribe(
        messages => {
          this.blogMessages = messages;
        },
        error =>  this.title = <any>error
      );
    return this.blogMessages;
  }


  ngOnInit() {
      this.route.params.subscribe((params: Params)=> {
          this.specificRoom = params['specificRoom'];
      });
    this.getBlogs(this.specificRoom);
  }

}
