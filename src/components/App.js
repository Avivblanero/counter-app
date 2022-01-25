import react from 'react';
import './App.css';
import { useState, useEffect } from 'react';



function App() {

  const [count, setCount] = useState(10);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    if (count === 0) {
      setIsHidden(true);
    }
  }, [count])

  return (
    <div className="App">
      <p>{count}</p>
      {isHidden ? <p>You can no longer decrease the counter!</p> : <button onClick={() => setCount(count - 1)}>click me!</button>}
    </div >
  );
}

export default App;
