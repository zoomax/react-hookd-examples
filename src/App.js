import React, { useState, useEffect  , useRef} from "react";
import  "./App.css"

function App() {
  const [count, setCount] = useState(() => 0);
  const [title, setTitle] = useState(() => "");
  const inputRef = useRef() ;  // mainly used for referencing input elements on compnent rerendering
  useEffect(() => {
    inputRef.current.focus() ; 
    console.log(" component did mount");
    return () => {
      console.log("component did unmount");
    };
  }, [count ]);
  function handleTitle () { 
    setTitle("useEffect hook revision")
    document.title = title; 
  }
  function handleCount() { 
    let inputValue = inputRef.current.value
    console.log(inputValue) ; 
    let increamentalValue =  +inputValue; 
    document.title = `you clicked ths button ${ increamentalValue> 0 ? count+increamentalValue  : count+1} times`; 
    setCount(increamentalValue> 0 ? count+increamentalValue  : count+1)
  }
  
  return (
    <div className="App">

      <p>{`you clicked ths button ${count} times`}</p>
      <div className = "container">
        <input className = "form-control" ref = {inputRef} type = "number" min = "0"  max = "100" placeholder = "please enter a number from 0 to 100" />
       </div>
      <div>
        <button onClick={handleCount}>set count</button>
        <button onClick={handleTitle}>set title</button>
      </div>
    </div>
  );
}

export default App;
