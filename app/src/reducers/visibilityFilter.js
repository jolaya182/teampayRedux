/* *
  title: visibilityFilters.js 

  date: 6/17/2019

  author:  javier olaya

  description: this reducer handles setting the type of filter
         
 */
import { VisibilityFilters } from '../actions'

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
