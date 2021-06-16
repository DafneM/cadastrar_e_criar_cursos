import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar />
      <Routes />
    </BrowserRouter>
    </div>
  );
}

export default App;