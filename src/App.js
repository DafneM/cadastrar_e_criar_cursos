import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import NavBar from './Components/Navbar';

function App() {
  return (
    <div>
    <BrowserRouter>
      <NavBar />
      <Routes />
    </BrowserRouter>
    </div>
  );
}

export default App;