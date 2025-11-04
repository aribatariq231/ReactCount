import { useState } from "react";

function App(){
  const[count,setCount] = useState(0)
  const[obtMarks, setObtMarks] = useState(904)
  const[totalMarks, setTotalMarks] = useState(1100)
  const[percentage, setPercentage] = useState(0)
  
  function increment(){
    setCount(count+1)
  }
  function decrement(){
    setCount(count-1)
  }
  function calculatePer(){
    setPercentage((obtMarks/totalMarks)*100)
  }

  
  return(
    <div>
      Count {count}
      <h1>Obtained Percentage : {percentage}</h1>
      <h1>Hello JS</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={calculatePer}>Percentage</button>
    </div>
  )
}
export default App;