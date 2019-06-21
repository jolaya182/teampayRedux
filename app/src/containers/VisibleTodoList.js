/* *
  title: VisibleTodoList.js 

  date: 6/17/2019

  author:  javier olaya

  description: this container handles all the logic for the todo and adding new todos
         
 */
import { connect } from 'react-redux'
import { toggleTodo, newTodo, addTodo, eraseFromNewTodoArray, toggleCompletedTasks } from '../actions'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../actions'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos.filter(t => t.hidden == false)
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    case VisibilityFilters.COMPLETED_TODOS:
      return todos.filter(t => !t.dates && t.completed && t.hidden)
    case VisibilityFilters.DONT_SHOW_COMPLETED_TODOS:
      return []
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}


const mapStateToProps = state => ({
  activeTodos: getVisibleTodos(state.todos, state.visibilityFilter),
  newTodo: state.newTodo,
  completedTodos: getVisibleTodos(state.todos, state.completedTodos)

})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  showNewTodos: () => dispatch(newTodo()),
  toggleFilter: () => dispatch(toggleCompletedTasks()),
  addTodoArray: (id, text, completed, date) => dispatch(addTodo(id, text, completed, date)),
  eraseFromNewTodoArray: id => dispatch(eraseFromNewTodoArray(id)),

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
