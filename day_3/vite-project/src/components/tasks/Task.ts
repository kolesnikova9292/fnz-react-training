export interface Task {
    id: number;
    title: string;
    status: 'today' | 'in-progress' | 'backlog';
    finished: boolean;
}

export interface ToDoListItem {
    listName: string;
    taskArray: Task[];
}

export interface ToDoList {
    items: ToDoListItem[]
}
