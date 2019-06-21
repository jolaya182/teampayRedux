/* *
  title: completedTodos.js 

  date: 6/17/2019

  author:  javier olaya

  description: this reducer handles toggling the completed todos 
         
 */
import { VisibilityFilters } from '../actions';

const completedTodos = (state = VisibilityFilters.COMPLETED_TODOS, action) => {
  switch (action.type) {
    case "TOGGLE_COMPLETED_TASKS":
      return state == "DONT_SHOW_COMPLETED_TODOS" ? "COMPLETED_TODOS" : "DONT_SHOW_COMPLETED_TODOS"
    default:
      return state
  }
}

export default completedTodos;