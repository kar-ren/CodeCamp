import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UsersModule } from './users/users.module';
import { TodosModule } from './todos/todos.module';
import { NgbModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from './users/user.service';
import { TodoService } from './todos/todos.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    UsersModule,
    TodosModule,
    NgbModule,
    NgbToastModule
  ],
  providers: [UserService, TodoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
