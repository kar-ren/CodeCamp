import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteComponent } from './delete/delete.component';
import { TodoComponent } from './todo/todo.component';
import { TodoService } from './todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  title = 'Todos';

  searchText: string;

  filteredData: any[];

  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    private todomodals: NgbModal,
    private todoService: TodoService
    ) {
    this.filteredData = this.todoService.getTodos();
  }

  ngOnInit() {
    console.log('[TodosComponent] On Init!');

    // Get the user id from URL
    this.activatedRoute.paramMap.subscribe(
      // Callback function
      (paramMap: ParamMap) => {
        console.log('User ID!!!');
        const userId = paramMap.get('userId');

        if (userId) {
          // Filter todos by owner (user id)
          this.filteredData = this.todoService.getTodos().filter((todo) => {
            return todo.owner === userId;
          });
        }
      }
    );
  }

  onSearch() {
    const searchText = this.searchText.toLowerCase();

    if (searchText) {
      this.filteredData = this.todoService.getTodos().filter((todo) => {
        return todo.name.toLowerCase().includes(searchText) ||
          todo.description.toLowerCase().includes(searchText)
      });
    }
    else {
      this.filteredData = this.todoService.getTodos();
    }
  }

  onUpdate(todo) {
    console.log('Update');
    this.todomodals.open(TodoComponent);
    console.log(todo);
  }

  newTodo() {
    this.todomodals.open(TodoComponent);
  }

  openDelete(){
    this.todomodals.open(DeleteComponent);
  }
}
