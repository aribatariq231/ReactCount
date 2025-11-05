import { useState } from "react";
import axios from "axios";

function App(){
  const[count,setCount] = useState(0)
  const[weather, setWeather]=useState({})
  const[obtMarks, setObtMarks] = useState(904)
  const[totalMarks, setTotalMarks] = useState(1100)
  const[percentage, setPercentage] = useState(0)

  // weather
  const[cityName, setCityName] = useState()
  const handleChange=(e)=>{
    setCityName(e.target.value)
  }
  
  const handleSubmit= async(e)=>{
    e.preventDefault()
    // alert("Submit Successfully!")
    try{
      const res = await axios.get(`https:p2pclouds.up.railway.app/v1/learn/weather?city=${cityName}`)
      setWeather(res.data)
    }
    catch(err){
      alert("Error")
    }
  }
  // console.log(cityName)

  // increment
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
  <>
  <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="cityName">City Name:</label>
    </div>
    <div>
      <input type="text" name="cityName" id="cityName" placeholder="Enter your city Name" onChange={handleChange} />
    </div>
    <button type="submit">Get</button>
  </form>
  <div>
    <h1>{weather.location && weather.location.name}</h1>
    <h1>{weather.location && weather.location.region}</h1>
    <h1>{weather.current && weather.current.temp_c}</h1>
  </div>

  {/* increment and decrement */}
    <div>
      Count {count}
      <h1>Obtained Percentage : {percentage}</h1>
      <h1>Hello JS</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={calculatePer}>Percentage</button>
    </div>
  </>  
  )
}
export default App;