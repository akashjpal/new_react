import { useState } from 'react'
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg'
import './App.css'
import MyButton from '../src/components/MyButton'
import ListComponent from '../src/components/ListComponent'


function App() {
  const [count, setCount] = useState(0)

  const aOne = [
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" }
    ];

  const handleClick = (item: { id: number; name: string }) => {
    console.log("Selected item:", item);
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <MyButton 
          onClick={() => setCount((count) => count + 1)}
          label={`my button count is ${count}`}
        ></MyButton>
        <ListComponent handleClick={handleClick} list={aOne}>
        </ListComponent>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
