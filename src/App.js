import './App.css';
import { useState, useEffect } from 'react';
// import Home from './pages/Home';
import GalleryPage from './pages/GalleryPage';
function App() {
  const [data, setData] = useState()
  useEffect(() => {
    fetch('data.json').then((response) => {
      return response.json();
    }).then((data) => {
      setData(data)
    })
  }, [])
  return (
    <div>
        <GalleryPage data={data}/>
    </div>
  );
}

export default App;
