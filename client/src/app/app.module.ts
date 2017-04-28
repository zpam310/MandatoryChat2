import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { RoomsComponent } from './rooms/rooms.component';
import { NewUserComponent } from './new-user/new-user.component';
import { routes } from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    RoomsComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
