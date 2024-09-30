import './styles/App.css';
import CarPage from './pages/CarPage';
import CarListPage from './pages/CarListPage';
import { Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<CarPage />} />
        <Route path="/carlist" element={<CarListPage />} />
      </Routes>
      <Footer />
    </div>   
  );
}

export default App;

