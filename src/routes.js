import Home from './pages/main/index/index'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/navbar';
import Sobre from './pages/sobre/about/about';
import Footer from './components/footer/footer';
import Portfolio from './pages/portfolio';
import Error from './pages/error/error';

function RoutesMain() {
  return (
    <div className="routes">
      <Router>
        <Navbar/>
            <Routes>
              <Route path='/' element={<Home />} /> 
              <Route path='/about' element={<Sobre />} /> 
              <Route path='/portfolio' element={<Portfolio />} /> 
              <Route path='/*' element={<Error />} /> 
              
            </Routes>  
            <Footer/>
      </Router>
    </div>
  );
}

export default RoutesMain;
