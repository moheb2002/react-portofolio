import {BrowserRouter , Routes , Route} from "react-router-dom"
import React from 'react';
import Navbar from "./assets/Components/Navbar/Navbar";
import Header from "./assets/Components/Header/Header";
import Services from "./assets/Components/Services/Services";
import About from "./assets/Components/About/About";
import Contact from "./assets/Components/Contact/Contact";
function App() {
  return (
    <div>
          <BrowserRouter>
    <Routes>
      <Route></Route>
    </Routes>
    </BrowserRouter>
      <Navbar />
        <Header/>
        <Services />
        <About />
        <Contact />
    </div>
  );
}

export default App;
