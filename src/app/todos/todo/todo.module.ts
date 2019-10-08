import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ]
})
export class TodoModule { }
