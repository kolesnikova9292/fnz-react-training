import {ToDoList} from "./Task.ts";

export const toDoList: ToDoList =
    {
        items: [{
            listName: 'Websire redesign',
            taskArray: [
                {
                    id: 1,
                    title: 'Update about page header',
                    status: 'today',
                    finished: false
                },
                {
                    id: 2,
                    title: 'About Page Holdings',
                    status: 'in-progress',
                    finished: false
                },
                {
                    id: 3,
                    title: 'New landing page layout',
                    status: 'in-progress',
                    finished: false
                },
                {
                    id: 4,
                    title: 'Update global iconset',
                    status: 'backlog',
                    finished: false
                },
                {
                    id: 5,
                    title: 'Play with a cat',
                    status: 'backlog',
                    finished: true
                },
                {
                    id: 6,
                    title: 'Learn react',
                    status: 'backlog',
                    finished: true
                }
            ]
        }, {
            listName: 'Walk with a dog',
            taskArray: [
                {
                    id: 7,
                    title: 'Walk with a dog in a morning',
                    status: 'today',
                    finished: false
                },
                {
                    id: 8,
                    title: 'Walk with a dog in an evening',
                    status: 'in-progress',
                    finished: false
                }
                ]
            }
        ]
    }
