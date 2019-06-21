/* *
  title: TodoList.js 

  date: 6/17/2019

  author:  javier olaya

  description: this component handles displaying every Todo 
         
 */
import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ toggleFilter, completedTodos, activeTodos, toggleTodo, newTodo, addTodoArray, eraseFromNewTodoArray }) => {
  return (
    <div className="todoContainer">
      <ul>
        {newTodo.length >= 1 ? <div className="todoLeft purpleText">New Tasks</div> : null}
        {newTodo && newTodo.map(todo =>
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => toggleTodo(todo.id)}
            addTodoArray={addTodoArray}
            eraseFromNewTodoArray={eraseFromNewTodoArray}
          />
        )}
      </ul>
      <ul>
        {activeTodos.length >= 1 ? <div className="row"> <div className="column todoLeft purpleText">ALL TASKS  </div><div className="column todoRight purpleText">Sort by: Due Date ˅ </div></div> : null}
        {activeTodos && activeTodos.map(todo =>
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => toggleTodo(todo.id)}
          />
        )}
      </ul>
      <div onClick={toggleFilter} className="underline">Show Completed Tasks</div>
      <ul>
        {completedTodos && completedTodos.map(todo =>
          <Todo
            key={todo.id}
            {...todo}
            onClick={(f) => f}
            green={true}
          />
        )}
      </ul>
    </div>
  )
}

TodoList.propTypes = {
  activeTodos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList
