import { TodoItem } from './todoitem';


export class Model {
    name: string;
    items: TodoItem[];

    constructor() {
        this.name = 'ihsosko';
        this.items = [
            { description: 'kahvaltı', action: true },
            { description: 'spor', action: true },
            { description: 'ponçik', action: false },
        ];
    }

}
