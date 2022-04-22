import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';

const Button = () =>{
  useEffect (() => {
    console.log("use effect is empty []");
    return () => { 
      alert ("unmount")
    }

  },[])
  return <button type="">useless button</button>
}

function App() {
  const [ toggle , setToggle ] = useState (false)
  const handleToggle = () => setToggle (!toggle)
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleToggle}>
          {toggle ? "is true" : "is false"}
          {toggle ? <Button /> : ""}
        </button>
      </header>
    </div>
  );
}

export default App;
