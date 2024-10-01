import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import HomePage from './pages/HomePage';
import AlbumsPage from './pages/AlbumsPage';
import CommentsPage from './pages/CommentsPage';
import PhotosPage from './pages/PhotosPage';
import PostsPage from './pages/PostsPage';
import TodoPage from './pages/TodoPage';
import UsersPage from './pages/UsersPage';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
      <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostsPage />}/>
        <Route path="/comments" element={<CommentsPage />}/>
        <Route path="/albums" element={<AlbumsPage />} /> 
        <Route path="/photos" element={<PhotosPage />}/>
        <Route path="/todo" element={<TodoPage />}/>
        <Route path="/users" element={<UsersPage />}/>
        <Route path="*" element={<ErrorPage />}/>


      </Routes>
      </>

  );
}

export default App;

