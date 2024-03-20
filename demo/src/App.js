
import './App.css';
import {useState} from 'react'
function App() {
  const [data,Setdata]=useState(0)
    function counter()
    {
      Setdata(data+1)
    }
    function counter1()
    {
      Setdata(data-1)
    }
  return (
    <div className="App">
      <header className="App-header">
     <h1>counter:{data}</h1>
     <button onClick={counter}>inscre</button>
     <br></br>
     <button onClick={counter1}>descre</button>
      </header>
    </div>
  );
}
export default App;
