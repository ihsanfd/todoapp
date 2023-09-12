// export class TodoItem {
//   description: string;
//   action: string;

//     constructor(description: string, action: string) {
//         this.description = 'kahvaltı';
//         this.action = action;
//         }
// }

// const td = new TodoItem("spor", "yes");

export interface TodoItem {
    description: string;
    action: boolean;
}
