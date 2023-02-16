
// import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Checkout from "./Components/Checkout/Checkout";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

function App() {
  return (
    // BEM
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/checkout" element={<Checkout />}>

          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;


