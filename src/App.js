import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import DatePage from './pages/Date';
import Login from './pages/Login';
import Video from './pages/Video';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/date' element={<DatePage />} />
          <Route path='/video' element={<Video />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
