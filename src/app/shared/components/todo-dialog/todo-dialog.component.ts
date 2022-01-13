import { Component, Inject, OnInit, Output } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Todo } from "../../models/todo.model";


@Component({
  selector: "app-todo-dialog",
  templateUrl: "./todo-dialog.component.html",
  styleUrls: ["./todo-dialog.component.scss"]
})
export class TodoDialogComponent implements OnInit {
  public inputValue: string = this.data.todo ? this.data.todo.text : '';
  public isEditMode: boolean = this.data.isEditMode;

  constructor(
    public dialogRef: MatDialogRef<TodoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  public ngOnInit(): void { 
    this.data.todo = new Todo(this.data.todo)
  }

  public onConfirm(): void {
    this.data.todo.text = this.inputValue;
    this.dialogRef.close(this.data);
  }
}
