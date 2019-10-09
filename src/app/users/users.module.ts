import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DeleteuserModule } from './deleteuser/deleteuser.module';
import { AdduserModule } from './adduser/adduser.module';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { AdduserComponent } from './adduser/adduser.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule, 
    DeleteuserModule,
    AdduserModule
  ],
  entryComponents: [
    DeleteuserComponent,
    AdduserComponent
  ]
})
export class UsersModule { }
