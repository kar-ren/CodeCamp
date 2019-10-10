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
  todo: Todos;

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
    this.title = this.todo ? "Update Todo" : "Add Todo";
    this.name = this.todo ? this.todo.name : "";
    this.description = this.todo ? this.todo.description : "";
    this.status = this.todo ? this.todo.status : "";
    this.owner = this.todo ? this.todo.owner : "";
  }

  submit(){
    if(this.todo){
      const update: Todos = {
        id: this.todo.id,
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
