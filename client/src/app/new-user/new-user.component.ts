import { Component, OnInit } from '@angular/core';
import { NewUserService } from './new-user.service'

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
  providers: [NewUserService]

})
export class NewUserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
