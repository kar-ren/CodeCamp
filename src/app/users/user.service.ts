import { Injectable } from '@angular/core';
import { Users } from './users';

@Injectable({
    providedIn: 'root'
})

export class UserService{
  
    userData = [
    {
      id: "1234",
      firstName: "Ted Ian",
      lastName: "Osias",
      occupation: "Software Engineer",
      profilePicture:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
    },
    {
      id: "1235",
      firstName: "Heinrich",
      lastName: "Woogue",
      occupation: "Software Engineer",
      profilePicture:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
    },
    {
      id: "1236",
      firstName: "Marianne",
      lastName: "Owen",
      occupation: "Manager",
      profilePicture:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
    },
    {
      id: "1237",
      firstName: "Teody",
      lastName: "Cue",
      occupation: "Software Engineer",
      profilePicture:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
    }
  ];

  getUserData(){
      return this.userData;
  }

  addUser(user: Users):Users{
    let id = (parseInt(this.userData[this.userData.length - 1].id)).toString();
    user.id = id;
    this.userData.push(user);
    return user;
  }

  findUserId(id: string){
    const findUser = this.userData.filter(user => {
      return user.id = id;
    })

    return findUser[0];
  }

  onUpdate(user: Users): Users{
    const userFound = this.findUserId(user.id);
    userFound.id = user.id;
    userFound.firstName = user.firstName;
    userFound.lastName = user.lastName;
    userFound.occupation = user.occupation;
    userFound.profilePicture = user.profilePicture;
    
    return userFound;
  }

  onDelete(id: string): Users{
    const userid = this.findUserId(id);
    const index = this.userData.indexOf(userid);
    return userid ? this.userData.splice(index, 1)[0] : null;
  }

  getAllUsers(page: number, pageSize:number, searchText: string){
    const filters = this.userData.filter(user => {
      return (
        user.firstName.toLowerCase().includes(searchText) ||
        user.lastName.toLowerCase().includes(searchText) ||
        user.occupation.toLowerCase().includes(searchText)
      )
    })

    return filters.slice(page * pageSize, (page + 1) * pageSize);
  }
}
