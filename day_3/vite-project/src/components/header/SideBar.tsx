import React, {useState} from "react";
import {Link} from "react-router-dom";
import {toDoList} from "../tasks/toDoList.ts";


const SideBar: React.FC = (props: any) => {

    console.log(props.showOnlyToday)

    const selectToDo = (event) => {
        props.selectedToDoClick(event.target.listName);
    }


  return (
      <>
          <div class="left-links">

              <button onClick={props.setShowOnlyTodayFilterClick}>{props.showOnlyToday ? 'Show all' : 'Only today'}</button>

              <ul>
                  {toDoList.items.map((todo) =>
                      <li key={todo.listName}>
                          <Link to="/" onClick={() => {
                              selectToDo({
                                  target: {
                                      listName: todo.listName,
                                  },
                              });
                          }}>{todo.listName}</Link>
                      </li>
                  )}
              </ul>

              {/*<ul>*/}
              {/*    <li>*/}
              {/*        <Link to="/">Tasks</Link>*/}
              {/*    </li>*/}
              {/*    <li>*/}
              {/*        <Link to="/shop">Shop</Link>*/}
              {/*    </li>*/}
              {/*    <li>*/}
              {/*        <Link to="/contact">Contact</Link>*/}
              {/*    </li>*/}
              {/*</ul>*/}
          </div>
      </>
  );
};

export default SideBar;
