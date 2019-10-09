import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { AdduserComponent } from './adduser/adduser.component';
import { Users } from './users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  title = 'Users';

  searchText: string;

  filteredData: any[];

  constructor(
    private userService: UserService,
    private userModal: NgbModal,
    ) {
    this.filteredData = this.userService.getUserData();
  }

  ngOnInit() {
    //
  }

  onSearch() {
    const searchText = this.searchText.toLowerCase();

    if (searchText) {
      this.filteredData = this.userService.getUserData().filter((user) => {
        return user.firstName.toLowerCase().includes(searchText) ||
          user.lastName.toLowerCase().includes(searchText) ||
          user.occupation.toLowerCase().includes(searchText);
      });
    }
    else {
      this.filteredData = this.userService.getUserData();
    }
  }

  onUpdate(user: Users) {
    console.log('Update');
    const saveData = this.userModal.open(AdduserComponent);
    saveData.componentInstance.user = user;
  }

  onDelete() {
    console.log('Delete');
    this.userModal.open(DeleteuserComponent);
  }
}
