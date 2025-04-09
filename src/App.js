// App.js
import React from "react";
import Navbar from "./Components/Navbar";
import TopBar from "./Components/TopBar";
import Home from "./Pages/Home";
import Slider from "./Components/Slider";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="slider-wrapper">
        <Slider />
        <div className="overlay-content">
          <TopBar />
          <Navbar />
        </div>
      </div>
      {/* <Home /> */}
    </div>
  );
}

export default App;
