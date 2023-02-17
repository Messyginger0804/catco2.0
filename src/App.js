import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Checkout from "./Components/Checkout/Checkout";
import Header from './Components/Header/Header';
import { useEffect } from "react";
import Home from './Components/Home/Home';
import Login from "./Components/Login/Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateManage";

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app loads...
    auth.onAuthStateChanged(authUser => {
      console.log('the user is>>>', authUser)


      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    });

  }, [])

  return (
    <Router>
      <div className="app">
        <Header />

        <Routes>

          <Route path="/" element={<Home />} />
          {/* </Route> */}

          <Route path="/login" element={<Login />} />
          {/* </Route> */}

          <Route path="/checkout" element={<Checkout />} />
          {/* </Route> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;


