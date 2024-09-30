import './styles/App.css';
import Header from './components/header/Header';
import HomePage from './pages/HomePage';
import StoriesPage from './pages/StoriesPage';
import VideoPage from './pages/VideoPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
      <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/stories" element={<StoriesPage />} /> 
        <Route path="video" element={<VideoPage />}/>
      </Routes>
      </>

  );
}

export default App;

