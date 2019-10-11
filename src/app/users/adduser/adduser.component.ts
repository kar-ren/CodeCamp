import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Users } from '../users';
import { UserService } from '../user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {

  @Input()
  user: Users;

  firstName: string;
  lastName: string;
  occupation: string;
  profilePicture: string;
  
  title: string;

  constructor(
    private modal: NgbActiveModal,
    private userService: UserService) { }

  ngOnInit() {
    this.title = this.user ? "Update User" : "Add User";
    this.firstName = this.user ? this.user.firstName : "";
    this.lastName = this.user ? this.user.lastName : "";
    this.occupation = this.user ? this.user.occupation : "";
    this.profilePicture = this.user ? this.user.profilePicture : "";
  }

  submit(){
    if(this.user){
      let update: Users = {
        id: this.user.id,
        firstName: this.firstName,
        lastName: this.lastName,
        occupation: this.occupation,
        profilePicture: this.profilePicture
      }
      const updated = this.userService.onUpdate(update);
      if(updated){
        this.modal.close("Updated");
      }
    }else{
        let update: Users = {
          id: "",
          firstName: this.firstName,
          lastName: this.lastName,
          occupation: this.occupation,
          profilePicture: this.profilePicture
        }
        const added = this.userService.addUser(update);
        if(added){
          this.modal.close("Added");
        }
    }
  }
}

