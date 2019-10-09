import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Todos } from '../todos';
import { TodoService } from '../todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input()
  todos: Todos;

  id: string;
  name: string;
  description: string;
  status: string;
  owner: string;

  title: string;


  constructor(
    private modal: NgbActiveModal,
    private todoService: TodoService) { }

  ngOnInit() {
    this.title = this.todos ? "Update Todo" : "Add Todo";
    this.name = this.todos ? this.todos.name : "";
    this.description = this.todos ? this.todos.description : "";
    this.status = this.todos ? this.todos.status : "";
    this.owner = this.todos ? this.todos.owner : "";
  }

  submit(){
    if(this.todos){
      const update: Todos = {
        id: this.todos.id,
        name: this.name,
        description: this.description,
        status: this.status,
        owner: this.owner
      }
      this.todoService.onUpdate(update);
    }else{
      
        const update: Todos = {
          id: "",
          name: this.name,
          description: this.description,
          status: this.status,
          owner: this.owner
        }
        this.todoService.addTodo(update);
    }
    this.modal.close();
  }
}
