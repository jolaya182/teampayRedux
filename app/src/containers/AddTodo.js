/* *
  title: AddTodo.js 

  date: 6/17/2019

  author:  javier olaya

  description: this container fires a dispatch once a todo gets added 
         
 */
import React from 'react'
import { connect } from 'react-redux'
import { addTodo, addNewTodo, changeHidden } from '../actions'

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div className="bottomPadding">
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim() || input.value.trim() == "Add a to-do") {
          return
        }
        dispatch(addNewTodo(input.value))
        dispatch(changeHidden())
        input.value = ''
      }}>
        <input type="text" onClick={(node) => node.value = ""} ref={node => input = node} ></input>
        <button type="submit">
          ADD
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
