import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TodoComponent } from './todo/todo.component';
import { TodoService } from './todos.service';
import { Todos } from './todos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  title = 'Todos';
  toData: any[];
  filteredData: any[];
  page : number;
  pageSize = 3;
  searchText: string;

 

  constructor(
    private todomodals: NgbModal,
    private todoService: TodoService,
    private router: Router
    ) {
    this.filteredData = this.todoService.getTodos();
  }

  ngOnInit() {
    this.filteredData;
    this.pageChange(1);
  }

  onSearch() {
    const searchText = this.searchText.toLowerCase();

    if (searchText) {
      this.filteredData = this.todoService.getTodos().filter((todo) => {
        return todo.name.toLowerCase().includes(searchText) ||
          todo.description.toLowerCase().includes(searchText) ||
          todo.status.toLowerCase().includes(searchText);
      });
    }
    else {
      this.filteredData = this.todoService.getTodos();
      this.router.navigate(['/todos'], { queryParams: { page: this.page , search: searchText}});
    }
  }

  onTodoUpdate(todo: Todos) {
    const modal = this.todomodals.open(TodoComponent);
    console.log('Update');
    modal.componentInstance.todo = todo;
    console.log(todo);
  }

  onDeleteTodo(todo: Todos){
    console.log('Delete');
    const delet = this.todoService.onDeleteTodo(todo.id);
    console.log(todo);
  }

  pageChange(pa: number){
    this.router.navigate(['/todos'], { queryParams: { page: this.page = pa}});
  }
}
