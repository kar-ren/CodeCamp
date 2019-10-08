import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

    todos = [];

    addTodo(todo) {
      this.todos.push(todo);
    }
  
    getTodos() {
      return this.todos;
    }
  
    clearTodo() {
      this.todos = [];
      return this.todos;
    }

}