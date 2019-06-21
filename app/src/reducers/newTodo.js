/* *
  title: newTodo.js 

  date: 6/17/2019

  author:  javier olaya

  description: this reducer handles the adding new todos and clearing it
         
 */
import { VisibilityFilters } from '../actions'

const newTodo = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NEW_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
          date: null
        }
      ]
    case 'ERASE_FROM_TODO_ARRAY':
      return state.filter((todo) => todo.id != action.id)
    default:
      return state
  }
}

export default newTodo