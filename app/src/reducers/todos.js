/* *
  title: todos.js 

  date: 6/17/2019

  author:  javier olaya

  description: this reducer handles the adding  todos 
         
 */
const todos = (state = [{
  id: 0,
  text: "13 Gifts to Get your Accounts for the Holidays",
  completed: false,
  date: new Date(2019, 6, 20),
  hidden: false
}, {
  id: 1,
  text: "Strategic Finance for Remote Teams: Scaling Purchasing",
  completed: false,
  date: new Date(),
  hidden: false
}, {
  id: 2,
  text: "Moving your team from HipChat to Slack",
  completed: false,
  date: new Date(2019, 12, 18),
  hidden: false
}, {
  id: 3,
  text: "CFO Series: The 3 Mistakes that Crushed Zirtual Overnight",
  completed: false,
  date: new Date(2019, 12, 26),
  hidden: false
}
  , {
  id: 4,
  text: "Joy of Finance Newsletter",
  completed: false,
  date: new Date(2019, 1, 1),
  hidden: false
}

], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
          date: action.date,
          hidden: action.hidden
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    case 'CHANGE_HIDDEN':
      return state.map(todo =>
        (todo.hidden == false && todo.completed)
          ? { ...todo, hidden: true }
          : todo
      )

    default:
      return state
  }
}

export default todos
