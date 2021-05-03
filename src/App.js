
import { useState } from "react";


function App() {
  let [color, setColor] = useState('green')
  console.log(color)

  function generateColor() {
    return '#' + Math.random().toString(16).substr(-6);
  }
  function changeColor() {
    setColor(color = generateColor())
  }


  return (
    <div className="App">
      <h1>Color Palette Generator</h1>
      <button onClick={changeColor}>Generate</button>
      <div className='blockContainer'>
        <div className='block' style={{ backgroundColor: color, opacity: '0.1' }} >  </div>
        <div className='block' style={{ backgroundColor: color, opacity: '0.2' }} >  </div>
        <div className='block' style={{ backgroundColor: color, opacity: '0.4' }} >  </div>
        <div className='block' style={{ backgroundColor: color, opacity: '0.6' }} >  </div>
        <div className='block' style={{ backgroundColor: color, opacity: '0.8' }} >  </div>
        <div className='block' style={{ backgroundColor: color, opacity: '1' }} >  </div>
      </div>
    </div>
  );
}

export default App;
