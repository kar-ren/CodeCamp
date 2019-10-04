import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  title = 'Todos';

  searchText: string;

  todoData = [
    {
      id: "1",
      name: "Todo #1",
      description: "",
      status: "Open",
      owner: "1234"
    },
    {
      id: "2",
      name: "Todo #2",
      description: "",
      status: "Open",
      owner: "1234"
    },
    {
      id: "1236",
      name: "Todo #3",
      description: "",
      status: "Open",
      owner: "1235"
    },
    {
      id: "1237",
      name: "Todo #4",
      description: "",
      status: "Open",
      owner: "1235"
    }
  ];

  filteredData: any[];

  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute
  ) {
    this.filteredData = this.todoData;
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
          this.filteredData = this.todoData.filter((todo) => {
            return todo.owner === userId;
          });
        }
      }
    );
  }

  onSearch() {
    const searchText = this.searchText.toLowerCase();

    if (searchText) {
      this.filteredData = this.todoData.filter((todo) => {
        return todo.name.toLowerCase().includes(searchText) ||
          todo.description.toLowerCase().includes(searchText)
      });
    }
    else {
      this.filteredData = this.todoData;
    }
  }

  onUpdate(todo) {
    console.log('Update');
    console.log(todo);
  }

  onDelete(todo) {
    console.log('Delete');
    console.log(todo);
  }

  newTodo() {
    this.router.navigate(['todo/new']);
  }

}
