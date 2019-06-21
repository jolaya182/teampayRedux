/* *
  title: index.js 

  date: 6/17/2019

  author:  javier olaya

  description: this index handles the all the actions and action creators 
         
 */

let nextTodoId = 5
export const addTodo = (id, text, completed, date) => ({
  type: 'ADD_TODO',
  id: id,
  date,
  text,
  completed,
  hidden:false
})
export const addNewTodo = text => ({
  type: 'ADD_NEW_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const toggleCompletedTasks = () => ({
  type: 'TOGGLE_COMPLETED_TASKS',
})


export const  newTodo = () =>({ 
  type:'NEW_TODO'
})

export const eraseFromNewTodoArray = id=>({
  type: "ERASE_FROM_TODO_ARRAY",
  id
});

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  COMPLETED_TODOS: 'COMPLETED_TODOS',
  DONT_SHOW_COMPLETED_TODOS: 'DONT_SHOW_COMPLETED_TODOS'

}

export const changeHidden = () => ({
  type: 'CHANGE_HIDDEN'
})