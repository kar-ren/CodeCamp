import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdduserComponent } from './adduser/adduser.component';
import { Users } from './users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  title: 'Users';
  userData: any[];
  filteredData: any[];
  page : number;
  pageSize = 3;
  searchText: string;

  constructor(
    private userService: UserService,
    private userModal: NgbModal,
    private router: Router    
    ) {
    this.filteredData = this.userService.getUserData();
  }

  ngOnInit() {
    this.filteredData;
    this.pageChange(1);
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
    this.router.navigate(['/users'], { queryParams: { page: this.page , search: searchText}});
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

  pageChange(pa: number){
    this.router.navigate(['/users'], { queryParams: { page: this.page = pa}});
  }
}
