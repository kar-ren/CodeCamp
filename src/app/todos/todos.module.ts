import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DeleteComponent } from './delete/delete.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModule } from './delete/delete.module';
import { TodoModule } from './todo/todo.module';



@NgModule({
  declarations: [TodosComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgbModule,
    DeleteModule,
    TodoModule
  ],
  entryComponents: [
    DeleteComponent
  ]
})
export class TodosModule { }
