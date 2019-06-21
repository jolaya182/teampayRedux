/* *
  title: TodoDisplay.js 

  date: 6/17/2019

  author:  javier olaya

  description: this component handles the integration between the addTodo and the visibleTodoList containers
         
 */
import React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

import styles from '../css/styles.css';

const TodoDisplay = ({ }) => {
  return (<div className="row ">
    <div className="column">

      <div className="row purple">

        <div className="column">
          <h3>Listicles</h3>
          Marketing Content ✎</div>

        <div className="row">
          <div className="column">
            <AddTodo></AddTodo>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="column">
        <VisibleTodoList></VisibleTodoList>
      </div>
    </div>
  </div>)
}

export default TodoDisplay;