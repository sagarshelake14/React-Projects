import { useState } from 'react'

function App() {
  
  let [counter, setCounter] = useState(15);
  //let counter = 15;
  
  const addValue = () => {
    // if(counter < 20) counter = counter + 1;    // HM
    // setCounter(counter)   

    // Interview Part 
     setCounter((prevCounter) => prevCounter + 1)
     setCounter((prevCounter) => prevCounter + 1)
     setCounter((prevCounter) => prevCounter + 1)
     setCounter((prevCounter) => prevCounter + 1)
  }

  const removeValue = () => {
    // if (counter != 0 ) counter = counter - 1    // HM
    // setCounter(counter)
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Code With Me</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue} >Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
