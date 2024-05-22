import './App.css';
import { useState } from 'react';

function App() {
  const [num, setNum] = useState('');
  const [show, setshow] = useState('');

  const handleClick = () =>{
    console.log(num % 3 === 0 && num % 5 === 0, num);
    if(num % 3 === 0 && num % 5 === 0){
      setshow('"FizzBuzz"')
    } else if(num % 5 === 0){
      setshow('"Buzz"')
    } else if(num % 3 === 0){
      setshow('"Fizz"')
    }
  }
  return (
    <div className="App">
      <h1 id='gameHead'>FizzBuzz Game</h1>
      <label>Enter a value</label>
      <input onChange={(e) => setNum(e.target.value)} id='value' type='number' name='value' />
      <button id='clickMe' onClick={handleClick}>Click me</button>
      <p id='result'>{show}</p>
    </div>
  );
}

export default App;
