import { Injectable } from "@angular/core";

import { ComponentStore } from "@ngrx/component-store";
import { Todo } from "src/app/shared/models/todo.model";
import { v4 as uuidv4 } from "uuid";

export interface TodoState {
  todos: Todo[]
}

const initialState: TodoState = {
  todos: [
    new Todo({
      id: uuidv4(),
      text: 'Praesent quis massa pretium leo aliquam volutpat. Vivamus tincidunt fermentum rhoncus. Nunc semper elit magna. Etiam placerat ac risus et volutpat. ',
      complete: false
    }),
    new Todo({
      id: uuidv4(),
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet, purus ut pellentesque posuere, odio dolor fermentum nisl, sit amet aliquam dui metus a magna. Proin faucibus dui ut mi laoreet faucibus. Donec lectus ante, faucibus at turpis eu, semper pharetra arcu. Phasellus sed mauris egestas sapien accumsan dictum. ',
      complete: true
    })
  ]
};

@Injectable()
export class TodoStore extends ComponentStore<TodoState> {
  constructor() {
    super(initialState);
  }

  // SELECTORS
  readonly getTodos = this.select(({ todos }) => todos);

  // UPDATERS
  readonly updateTodo$ = this.updater((state, updatedTodo: Todo) => {
    return {
      ...state,
      ...{
        todos: state.todos.map((todo: Todo) =>
          todo.id === updatedTodo.id ? updatedTodo : todo
        )
      }
    };
  });

  readonly deleteTodo$ = this.updater((state, updatedTodo: Todo) => {
    return {
      ...state,
      ...{
        todos: state.todos.filter((todo: Todo) =>
          todo.id != updatedTodo.id
        )
      }
    };
  });
}
