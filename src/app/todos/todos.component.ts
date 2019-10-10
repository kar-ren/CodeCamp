import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TodoComponent } from './todo/todo.component';
import { TodoService } from './todos.service';
import { Todos } from './todos';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  title = 'Todos';
  toData: any[];
  pages: number = 5;
  pageSize: number = 5;
  page: number=1;
  searchText: string;

  filteredData: any[];

  constructor(
    private todomodals: NgbModal,
    private todoService: TodoService,
    private activatedRoute: ActivatedRoute
    ) {
    this.filteredData = this.todoService.getTodos();
  }

  ngOnInit() {
    this.filteredData;
    // console.log('[TodosComponent] On Init!');

    // // Get the user id from URL
    // this.activatedRoute.paramMap.subscribe(
    //   // Callback function
    //   (paramMap: ParamMap) => {
    //     console.log('User ID!!!');
    //     const userId = paramMap.get('userId');

    //     if (userId) {
    //       // Filter todos by owner (user id)
    //       this.filteredData = this.todoService.getTodos().filter((todo) => {
    //         return todo.owner === userId;
    //       });
    //     }
    //   }
    //);
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

  getTodoData(){
    this.toData = this.todoService.loadTodos(this.page, this.pageSize);
    this.filteredData = this.toData;
    this.pages = this.todoService.getTodos().length;
  }

  pageChange(event){
    this.page = event;
    this.getTodoData();
  }
}
