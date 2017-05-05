import { Component, OnInit } from '@angular/core';
import { NewUserService } from './new-user.service'
import { NewUser } from "./new-user";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
  providers: [NewUserService]

})
export class NewUserComponent implements OnInit {

  private users: NewUser[] = [];
  public userList = this.users;
  title = 'MEAN app with Angular2';
  model = new NewUser("");

  constructor (private service: NewUserService, private route: ActivatedRoute, private router: Router) {}

  getNewUser() {
    this.service.getNewUser()
        .subscribe(
            listOfUsers => {
              this.users = listOfUsers
              console.log(this.users)
            },
            error => this.users =<any>error
        );
    return this.users;
  }
  addNewUser() {
    //this.resetModel(this.model, this.model.username);
    this.service.addNewUser(this.model)
        .subscribe(
            Newuser => {
              this.model = Newuser;
              this.getNewUser();
            },
            error => this.title = <any>error
        );
    this.router.navigate(["rooms"])
  }

  resetModel(userModel, userModelUsername) {
    userModel = new NewUser(userModelUsername)
    this.model = userModel
  }


  ngOnInit() {
    this.getNewUser()
  }

}
