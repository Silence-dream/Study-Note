import React from 'react'
import Footer from './Footer.jsx'
import AddTodo from '../containers/AddTodo.jsx'
import VisibleTodoList from '../containers/VisibleTodoList'
import { useSelector } from 'react-redux'

const App = () => {
  let state = useSelector(state => state)
  return(
    <div>
      {JSON.stringify(state)}
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
)
}

export default App
