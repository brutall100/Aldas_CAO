import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import HomePage from './pages/HomePage';
import AlbumsPage from './pages/AlbumsPage';
import CommentsPage from './pages/CommentsPage';
import CommentDetailsPage from './pages/CommentDetailsPage';
import PhotosPage from './pages/PhotosPage';
import PostsPage from './pages/PostsPage';
import PostDetailsPage from './pages/PostDetailsPage';
import AllCommentsPage from './pages/AllCommentsPage';
import UsersPage from './pages/UsersPage';
import UserDetailsPage from './pages/UserDetailsPage';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
      <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostsPage />}/>
        <Route path="/posts/:postId" element={<PostDetailsPage />} />
        <Route path="/posts/:postId/comments" element={<AllCommentsPage />} />
        <Route path="/comments" element={<CommentsPage />}/>
        <Route path="/comments/:commentId" element={<CommentDetailsPage />} />
        <Route path="/albums" element={<AlbumsPage />} /> 
        <Route path="/photos" element={<PhotosPage />}/>
        <Route path="/users" element={<UsersPage />}/>
        <Route path="/users/:id" element={<UserDetailsPage />}/>
        <Route path="*" element={<ErrorPage />}/>


      </Routes>
      </>

  );
}

export default App;

// npx json-server db.json
// npm start

