import './App.css';
import {useEffect, useState} from 'react';

function App() {
  const [data, setData] = useState()
  useEffect(() => {
    fetch('http://localhost:3000/users/amir').then(data => data.json()).then(data => {
      setData(data)
    })
  }, [])

  return (
    <div className="App">
      {data ? `${data.name}: ${data.message}` : null}
    </div>
  );
}

export default App;
