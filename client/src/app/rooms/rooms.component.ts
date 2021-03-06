import { Component, OnInit } from '@angular/core';
import { RoomsService } from "./rooms.service";
import { Rooms } from "./rooms";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
  providers: [RoomsService]
})
export class RoomsComponent implements OnInit {

  private rooms: Rooms[] = [];
  public roomList = this.rooms;
  title = 'MEAN app with Angular2';
  model = new Rooms("");


  constructor (private route: ActivatedRoute,
               private router: Router,
               private service: RoomsService) {}

  getRooms() {
    this.service.getRooms()
        .subscribe(
            listOfRooms => {
              this.rooms = listOfRooms
              console.log(this.rooms)
            },
            error => this.rooms =<any>error
        );
    return this.rooms;
  }

  addRooms() {
   // this.resetModel(this.model, this.model.chatRoom);
    this.service.addRooms(this.model)
        .subscribe(
            room => {
              this.model = room;
              this.getRooms();
            },
            error => this.title = <any>error
        );
  }

  ngOnInit() {
    this.getRooms()
  }

}
