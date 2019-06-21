/* *
  title: Todo.js 

  date: 6/17/2019

  author:  javier olaya

  description: this component handles the todo data for the user interface 
         
 */
import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, id, text, date, hidden, addTodoArray, eraseFromNewTodoArray, green }) => {
  /* initiate the variable */
  const mArry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const dArry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let mnth, day;
  let today = new Date();
  let yesterday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);
  const getTextColor = (date) => {
    let text;
    let color = "columnDay todoRight ";
    //if date does not exists
    if (!date) {
      text = " "; color += " ";
      //if date is today
    } else if (date.getDate() == today.getDate()) {
      text = "Today"; color += " orange";
      //if date was yesterday
    } else if (date.getDate() == yesterday.getDate()) {
      text = "Yesterday"; color += " red";
      //other wise it is any other day
    } else {
      text = date.toLocaleString("en-us", { month: 'short' }) + " " + date.getDate(); color = " ";
    }


    return { "text": text, "color": color }
  }
  const textColor = getTextColor(date);

  return (<li>
    <div className="row bottom" >
      <div className="column todoLeft checkboxFive"
        style={{
          textDecoration: completed ? 'line-through' : 'none'
        }}><div className=" todoLeft">
          <input type="checkbox" value="1" id={id} defaultChecked={green ? "checked" : null} ></input>
          <label htmlFor={id} onClick={onClick} defaultChecked={completed ? "checked" : null} ></label>
          {text}
        </div>
      </div>
      <div className={textColor.color}>
        {textColor.text}
        📆
      </div>

    </div>
    {!date && <form className="row "
      onSubmit={(e) => {
        e.preventDefault();
        if (mnth.value != "Month" && day.value != "Day") {
          let d = new Date("2019", mnth.value, day.value);
          // dispatch the add to the todo Array
          addTodoArray(id, text, completed, d, hidden);
          // dispatch the erase from the todo array
          eraseFromNewTodoArray(id);

        } else { return }
      }}
    >
      <select className="column " type="text" ref={node => mnth = node}><option> Month</option>{mArry.map((num, indx) => <option key={indx}>{num}</option>)}</select>
      <select className="column " type="text" ref={node => day = node}><option> Day</option>{dArry.map((num, indx) => <option key={indx}>{num}</option>)}</select>
      <button className="column ">Submit</button>
    </form>}
  </li>)
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
