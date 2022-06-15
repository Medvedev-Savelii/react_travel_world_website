import React from "react";
import Destinations from "./components/Destinations";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Destinations />
    </>
  );
}

export default App;
