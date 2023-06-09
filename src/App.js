import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';
import Features from './components/Features';


function App() {
  return (
    <>

      <Navbar />
      <Header />
      <About />
      <Services />
      <Features />
      <Footer />

      <Routes>
        <Route />
      </Routes>




    </>
  );
}

export default App;
