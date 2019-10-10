import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdduserComponent } from './adduser/adduser.component';
import { Users } from './users';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  title: 'Users';
  userData: any[];
  pages: number;
  pageSize: number = 5;
  page: number=1;
  searchText: string;

  filteredData: any[];

  constructor(
    private userService: UserService,
    private userModal: NgbModal,
    private active: ActivatedRoute
    ) {
    this.filteredData = this.userService.getUserData();
  }

  ngOnInit() {
    this.filteredData;
    this.active.queryParams
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

  onDelete(user: Users) {
    console.log('Delete');
    const delet = this.userService.onDelete(user.id);
    console.log(user);
  }

  getUserData(){
    this.userData = this.userService.loadUsers(this.page, this.pageSize);
    this.filteredData = this.userData;
    this.pages = this.userService.getUserData().length;
  }

  pageChange(event){
    this.page = event;
    this.getUserData();
  }
}
