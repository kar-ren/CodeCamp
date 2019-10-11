import { Injectable } from '@angular/core';
import { Todos } from './todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoData = [
    {
      id: "1",
      name: "Todo #1",
      description: "Lorem Ipsum",
      status: "Open",
      owner: "1234"
    },
    {
      id: "2",
      name: "Todo #2",
      description: "Lorem Ipsum",
      status: "Open",
      owner: "1234"
    },
    {
      id: "1236",
      name: "Todo #3",
      description: "Lorem Ipsum",
      status: "Open",
      owner: "1235"
    },
    {
      id: "1237",
      name: "Todo #4",
      description: "Lorem Ipsum",
      status: "Open",
      owner: "1235"
    }
  ];

  getTodos() {
    return this.todoData;
  }

  addTodo(todo: Todos):Todos{
    let id = (parseInt(this.todoData[this.todoData.length - 1].id)).toString();
    todo.id = id;
    return todo;
  }

  findTodoId(id: string){
    const findTodo = this.todoData.filter(todo => {
      todo.id = id;
    });
  
    return findTodo[0];
  }

  onUpdate(todo: Todos): Todos{
    const todoFound = this.findTodoId(todo.id);
    todoFound.name = todo.name;
    todoFound.description = todo.description;
    todoFound.status = todo.status;
    todoFound.owner = todo.owner;
    
    return todoFound;
  }

    onDeleteTodo(id: string): Todos{
      const todoid = this.findTodoId(id);
      const index = this.todoData.indexOf(todoid);
      return todoid ? this.todoData.splice(index, 1)[0] : null;
    }

  getAllTodos(page: number, pageSize:number, searchText: string){
    const filters = this.todoData.filter(todo => {
      return (
        todo.name.toLowerCase().includes(searchText) ||
        todo.description.toLowerCase().includes(searchText) ||
        todo.status.toLowerCase().includes(searchText)
      )
    })

    return filters.slice(page * pageSize, (page + 1) * pageSize);
  }
}