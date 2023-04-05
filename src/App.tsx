import React from 'react';
import './App.scss';
import Header from "./Header/header";
import Home from "./Home/home";
import Service from "./Service/service";
import Costom from "./Costom/costom";
import Extra from "./Extra/extra";
import Team from "./Team/team";
import Sub from "./Sub/sub";
import Footer from "./Footer/footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Service/>
      <Costom/>
      <Extra/>
      <Team/>
      <Sub/>
      <Footer/>
    </div>
  );
}

export default App;
