import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GalleryPage from './pages/GalleryPage';

document.documentElement.classList.remove('dark')

function App() {
  const [data, setData] = useState(null); // Initialize state with null

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json'); // Relative path to the JSON file
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching JSON data:', error);
      }
    };

    fetchData();
  }, []);

  // Render loading indicator or empty component while data is being fetched
  if (data === null) {
    return <div className='w-full h-screen flex justify-center items-center text-5xl'>
      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-32 border-t-2 border-b-2 border-blue-900"></div>
      </div>

    </div>;
  }

  return (
    <Routes>
      <Route path='/' element={<Home data={data} />} />
      <Route path='/gallery' element={<GalleryPage data={data} />} />
    </Routes>
  );
}

export default App;
