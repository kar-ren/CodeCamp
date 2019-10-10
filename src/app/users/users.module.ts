import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdduserModule } from './adduser/adduser.module';
import { AdduserComponent } from './adduser/adduser.component';



@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule, 
    AdduserModule
  ],
  entryComponents: [
    AdduserComponent
  ]
})
export class UsersModule { }
