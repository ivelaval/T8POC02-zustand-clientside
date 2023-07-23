import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { useBookStore } from './store/bookStore'

import { states } from './store/utilStore';

import './App.css'
import {shallow} from "zustand/shallow";
import { useUserStore } from "./store/userStore";

function App() {
  // const amount = useBookStore(state => state.amount);
  // const title = useBookStore(state => state.title);

    /*const { amount, title, updateAmount, updateTitle } = useBookStore((state) => ({
      amount: state.amount,
      title: state.title,
      updateAmount: state.updateAmount,
      updateTitle: state.updateTitle,
    }), shallow);*/

    const { amount, title, updateAmount, updateTitle } = useBookStore(states, shallow);
    const { name, age, setUser } = useUserStore(states, shallow);

  return (
    <>
        <div>
            <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
        </div>
        <h1>Books</h1>
        <h3>Amount: {amount}</h3>
        <h3>Title: {title}</h3>

        <div>
            <button onClick={() => updateAmount(10)}>Update amount</button>
            <button onClick={() => updateTitle("Master chef celebrity")}>Change title</button>
        </div>

        <h1>Users</h1>

        <h3>name: {name}</h3>
        <h3>Title: {age}</h3>

        <div>
            <button onClick={() => setUser({ name: 'Ivan Avila', age: 36 })}>Set User</button>
        </div>

    </>
  )
}

export default App
