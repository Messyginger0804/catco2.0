
<<<<<<< HEAD
// import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Checkout from "./Components/Checkout/Checkout";
=======
import './App.css';
>>>>>>> 08cdacd3417099236a7bc7058dd62afda589b2ef
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


