import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { FormsModule } from '@angular/forms';
import { DeleteComponent } from './delete/delete.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModule } from './delete/delete.module';



@NgModule({
  declarations: [TodosComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    DeleteModule
  ],
  entryComponents: [
    DeleteComponent
  ]
})
export class TodosModule { }
