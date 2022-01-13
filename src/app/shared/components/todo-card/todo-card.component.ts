import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Todo } from "../../models/todo.model";


@Component({
  selector: "app-todo-card",
  templateUrl: "./todo-card.component.html",
  styleUrls: ["./todo-card.component.scss"]
})
export class TodoCardComponent implements OnInit {

  @Input() id!: string;
  @Input() complete: boolean = false;
  @Input() text: string = '';

  @Output() onCompleteClickEvent = new EventEmitter<Todo>();
  @Output() onEditClickEvent = new EventEmitter<Todo>();
  @Output() onDeleteClickEvent = new EventEmitter<Todo>();

  public todo!: Todo;
  
  public ngOnInit(): void { 
    this.todo = new Todo({ id: this.id, complete: this.complete, text: this.text })
  }


  public onTudoCompleteChange(): void {
    const todo: Todo = new Todo({
      id: this.id,
      complete: !this.complete,
      text: this.text
    });
    this.todo.complete = !this.todo.complete;
    this.onCompleteClickEvent.emit(todo);
  }
}
