import { v4 as uuidv4 } from "uuid";

export class Todo {
    public id!: string;
    public text!: string;
    public complete!: boolean;

    constructor(data?: any) {
        this.id = data ? data.id : uuidv4();
        this.text = data ? data.text : '';
        this.complete = data ? data.complete : true;
    }
}