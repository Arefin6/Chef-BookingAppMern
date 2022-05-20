import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './pages/Login';
import Register from './pages/Register';
import DashBoard from './pages/DashBoard';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <main>
          <Routes>
            <Route path='/' element={<Login/>} />
          </Routes>
          <Routes>
            <Route path='/register' element={<Register/>} />
          </Routes>
          <Routes>
            <Route path='/dashboard' element={<DashBoard/>} />
          </Routes>
      </main>    
      <Footer/> 
    </BrowserRouter>
  );
}

export default App;
