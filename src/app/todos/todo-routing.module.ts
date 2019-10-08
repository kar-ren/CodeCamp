import { RouterModule, Routes } from "@angular/router";
import { TodosComponent } from './todos.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{path:"", component: TodosComponent}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TodoRoutingModule{

}