/* *
  title: index.js 

  date: 6/17/2019

  author:  javier olaya

  description: this combines the todos, visibilityFilter, newTodo and completedTodos reducers  
         
 */
import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import newTodo from './newTodo';
import completedTodos from './completedTodos';
export default combineReducers({
  todos,
  visibilityFilter,
  newTodo,
  completedTodos
})
