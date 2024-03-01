import './App.css';
import { ApiProvider } from './api/ApiContext';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GalleryPage from './pages/GalleryPage';

document.documentElement.classList.remove('dark')

function App() {

  return (
    <ApiProvider>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/gallery' element={<GalleryPage />} />
    </Routes>
    </ApiProvider>
  );
}

export default App;
