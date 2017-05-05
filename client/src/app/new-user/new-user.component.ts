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
    feedback;


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


    loginUser(username) {
        console.log("Loginuser -1");
        this.resetModel(this.model, this.model.username);
        this.service.loginUser(username)
            .subscribe(
                feedback => {
                    console.log("Loginuser -2");

                    if (feedback.length === 1) {
                        console.log("Loginuser -3");
                        this.feedback = 'Username already in use';
                    } else {
                        console.log("Loginuser -4");

                        this.resetModel(this.model, this.model.username);
                        this.service.addNewUser(this.model)
                            .subscribe(
                                user => {
                                    this.model = user;
                                    this.getNewUser();
                                },
                                error =>  this.title = <any>error
                            );
                        this.router.navigate(['welcome']);
                    }
                }
            );
    }

  resetModel(userModel, userModelUsername) {
    userModel = new NewUser(userModelUsername)
    this.model = userModel
  }


  ngOnInit() {
    this.getNewUser()
  }

}
