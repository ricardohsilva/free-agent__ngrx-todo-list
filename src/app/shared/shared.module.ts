import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MaterialModule } from "../material.module";
import { TodoCardComponent } from "./components/todo-card/todo-card.component";
import { TodoDialogComponent } from "./components/todo-dialog/todo-dialog.component";

@NgModule({
    declarations: [
        TodoCardComponent,
        TodoDialogComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MaterialModule,
        FlexLayoutModule,
    ],
    exports: [
        CommonModule,
        FlexLayoutModule,
        MaterialModule,
        TodoCardComponent,
        TodoDialogComponent
    ],
    providers: []
})

export class SharedModule { }