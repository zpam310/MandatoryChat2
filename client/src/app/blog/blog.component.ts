import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
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
export class BlogComponent implements OnInit, AfterViewChecked {

    @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  title = 'MEAN app with Angular2';
  model = new Blog("", "", "");
  specificRoom: string;
  public blogMessages = [];

  constructor (private http: Http,
               private service: BlogService,
               private route: ActivatedRoute) {}

   ngAfterViewChecked() {
        this.scrollToBottom();
    }

    scrollToBottom(): void {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        } catch(err) { }
    }

  submitBlog() {

      this.model = new Blog(this.model.username, this.model.msg, this.specificRoom);
      console.log(this.model);
       this.service.addBlog(this.model)
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
      this.service.getBlogs(specificRoom)
      .subscribe(
        messages => {
          this.blogMessages = messages;
        },
        error =>  this.blogMessages = <any>error
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
