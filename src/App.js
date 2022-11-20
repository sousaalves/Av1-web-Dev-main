import './App.css';
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Header from './components/Header';
import Dashboard from './pages/dashboard';
import Home from './pages/home';
import login from './pages/login';

function App() {
  return (
    <>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path={"home"} element={<Home />} />
          <Route path={"dashboard"} element={<Dashboard />} />
          <Route path={"/"} element={<Navigate to={"/home"} />} />
          <Route path={"login"} element={<login />} />
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;