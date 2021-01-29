import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(() => 0);
  const [title, setTitle] = useState(() => "");
  useEffect(() => {
   
    console.log(" component did mount");
    // return () => {
    //   console.log("component did unmount");
    // };
  }, [count]);
  function handleTitle () { 
    setTitle("useEffect hook revision")
    document.title = title; 
  }
  function handleCount() { 
    document.title = `you clicked ths button ${count+1} times`; 
    setCount(count+1)
  }
  
  return (
    <div className="App">
      <p>{`you clicked ths button ${count} times`}</p>
      <div>
        <button onClick={handleCount}>set count</button>
        <button onClick={handleTitle}>set title</button>
      </div>
    </div>
  );
}

export default App;
