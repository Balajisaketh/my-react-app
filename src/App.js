import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { AuthProvider } from './contexts/Authcontext';
import Banner  from './Banner';

function App() {
  return (
    <div className="App">

<BrowserRouter>
<AuthProvider>  
  <Routes>
          <Route path="/" element={<Login/>} /> 
          <Route path="/banner" element={<Banner/>} /> 
          
          
      </Routes>
      </AuthProvider>
    </BrowserRouter>

    </div>
  );
}

export default App;
