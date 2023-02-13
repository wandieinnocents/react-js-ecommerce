import './App.css';
import Header from "./Header/Header";
import Home from "./Home/Home";
import Checkout from "./Checkout/Checkout";
import Login from "./Auth/Login";


import {BrowserRouter as Router,Route,Routes } from "react-router-dom";




function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
      {/* Home route */}
      <Route path="/" element={ [<Header/>,<Home/>] }  />
      
      {/* Checkout route */}
      <Route path="/checkout" element={ [<Header/>,<Checkout/>]}  />
      {/* login */}
      <Route path="/login" element={ [<Header/>,<Login/>]}  />

      </Routes>
    </Router>

     {/* <Header />
     <Home /> */}
     

    </div>
  );
}

export default App;
