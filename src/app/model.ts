import { TodoItem } from './todoitem';


export class Model {
    name: string;
    items: TodoItem[];

    constructor() {
        this.name = 'ihsosko';
        this.items = [
            { description: 'kahvaltı', action: "yes" },
            { description: 'spor', action: "yes" },
            { description: 'ponçik', action: "no" },
        ];
    }

}
