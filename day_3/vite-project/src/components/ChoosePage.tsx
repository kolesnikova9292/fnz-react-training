import React, {useState} from "react";
import {Outlet, Route} from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import SideBar from "./header/SideBar.tsx";
import {toDoList} from "./tasks/toDoList.ts";

const ChoosePage: React.FC = (props: any) => {

    const [showOnlyToday, setShowOnlyToday] = useState(false);

    const [selectedToDo, setSelectedToDo] = useState(toDoList.items[0].listName);

    const setShowOnlyTodayFilterClick = () => {
        console.log(1111)
        const value = showOnlyToday;
        setShowOnlyToday(!value);
    }

    const selectedToDoClick = (event) => {
        console.log(event);
        setSelectedToDo(event);
    }

  return (
      <>
        <SideBar showOnlyToday = {showOnlyToday} setShowOnlyTodayFilterClick = {setShowOnlyTodayFilterClick}
                 selectedToDo = {selectedToDo}
                 selectedToDoClick = {selectedToDoClick}
        />

        <Outlet context={[showOnlyToday, setShowOnlyToday], []}/>

      </>
  )
};

export default ChoosePage
