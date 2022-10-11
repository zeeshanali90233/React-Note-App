import Header from './Components/header';
import { About } from './Components/about';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import {Layout} from './Components/Layout';
import { useState ,useEffect} from 'react';

function App() {
  return (
    <>
    <div className="App">
  <Router>
      <Header heading="Notes List"/>
    <Routes>
      <Route  exact path="about" element={<About/>} />
      <Route exact path="/" element={<Layout/>}>
      </Route>
    </Routes>
  </Router>
  </div>
    
  </>
  );
}

export default App;
