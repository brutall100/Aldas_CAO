import Main from './components/PageMainElement';
import Aside from './components/PageAsideElement'
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="page-content">

        <Main/>

        <Aside/>

      </div>
    </div>
  );
}

export default App;
