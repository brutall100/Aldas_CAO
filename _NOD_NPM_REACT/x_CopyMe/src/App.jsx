import './styles/App.css';
import Header from './components/header/Header';
import HomePage from './pages/HomePage';
import StoriesPage from './pages/StoriesPage';
import VideoPage from './pages/VideoPage';
import ErrorPage from './pages/ErrorPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
      <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/stories" element={<StoriesPage />} /> 
        <Route path="/video" element={<VideoPage />}/>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      </>

  );
}

export default App;

