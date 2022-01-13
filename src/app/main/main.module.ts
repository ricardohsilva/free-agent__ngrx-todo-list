import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { SharedModule } from "src/app/shared/shared.module";
import { MainRoutes } from "./main.routes";
import { TodoComponent } from "./todo/todo.component";
import { TodoStore } from "./todo/todo.store";

@NgModule({
    declarations: [
        TodoComponent
    ],
    imports: [
        RouterModule.forChild(MainRoutes),
        SharedModule,
    ],
    providers: [
        TodoStore
    ]
})

export class MainModule { }