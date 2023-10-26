import './App.css'
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFiltrate from "./components/TodoFiltrate";
import { useSelector } from 'react-redux';

function App() {
const state = useSelector(state => state);
  return (
    <div className="App">
      {JSON.stringify(state)}
      <br />
      <TodoInput/>
      <TodoList/>
      <TodoFiltrate/>
    </div>
  )
}

export default App
