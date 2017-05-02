import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { NewUserComponent } from './new-user/new-user.component';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';

const router: Routes = [
  { path: '', component: NewUserComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'rooms/:specificRoom', component: BlogComponent },
  { path: 'rooms', component: RoomsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    NewUserComponent,
    BlogComponent
  ],
  imports: [
    RouterModule.forRoot(router, {useHash: true}),
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
