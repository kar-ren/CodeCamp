import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TodoModule { }
