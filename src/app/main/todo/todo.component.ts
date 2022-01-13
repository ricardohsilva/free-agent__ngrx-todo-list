import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

import { TodoDialogComponent } from "src/app/shared/components/todo-dialog/todo-dialog.component";
import { Todo } from "src/app/shared/models/todo.model";
import { TodoStore } from "./todo.store";

@Component({
    selector: "app-todo",
    templateUrl: "./todo.component.html",
    styleUrls: ["./todo.component.scss"]
})
export class TodoComponent implements OnInit {
    public todos: Todo[] = [];

    constructor(
        private readonly _todoStore: TodoStore,
        private _dialog: MatDialog
    ) {

    }
    public ngOnInit(): void {
        this._todoStore.getTodos.subscribe((todos) => {
            this.todos = todos;
        });
    }

    public onTodoChange(todo: Todo): void {
        this._todoStore.updateTodo$(todo);
    }

    public clearList(): void {
        this._todoStore.setState({ todos: [] });
    }

    public deleteTodo(todo: Todo): void {
        this._todoStore.deleteTodo$(todo);
    }

    public openDialog(todo?: Todo): void {
        const dialogData = {
            todo: todo,
            isEditMode: todo ? true : false
        };
        const dialogRef = this._dialog.open(TodoDialogComponent, {
            data: {
                ...dialogData
            }
        });
        dialogRef
            .afterClosed()
            .subscribe((data: any) => {
                if (!data) return;
                if (!data.isEditMode) {
                    this._todoStore.patchState((state) => ({
                        todos: [...state.todos, new Todo(data.todo)]
                    }));
                } else {
                    this.onTodoChange(data.todo);
                }
            });
    }
}
