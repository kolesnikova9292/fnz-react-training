import React, {useState} from 'react'
import './App.css'
import ChoosePage from "./components/ChoosePage.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Tasks from "./components/tasks/Tasks.tsx";
import {toDoList} from "./components/tasks/toDoList.ts";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ChoosePage/>,
        children: [
            {
                element: <Tasks/>,
                index: true
            }
        ],
    },
]);

const contextValue = {data: toDoList};
export const MyContext = React.createContext(contextValue);

function App() {
    const [count, setCount] = useState(0)

    return <MyContext.Provider value={contextValue}><RouterProvider router={router}/> </MyContext.Provider>;
}

export default App
