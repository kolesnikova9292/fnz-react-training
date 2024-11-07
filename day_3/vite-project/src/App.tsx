import { useState } from 'react'
import './App.css'
import ChoosePage from "./components/ChoosePage.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Tasks from "./components/tasks/Tasks.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ChoosePage />,
        children: [
            {
                element: <Tasks />,
                index: true
            }
        ],
    },
]);

function App() {
  const [count, setCount] = useState(0)

    return <RouterProvider router={router} />;
}

export default App
