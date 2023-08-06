
import Jumbotron from "./site/components/Jumbotron";
import InfoSection from "./site/components/InfoSection";
import Nav from "./site/components/Nav";
import Overview from "./site/components/Overview";
import { Component } from "react";


function App() {
let Component
  switch (window.location.pathname) {

    case "/":
      break
       case "/Overview":
       //  Component = <Overview />
      // break
     case "/Jumbotron":
      Component = <Jumbotron />
      break
      // case "/InfoSection":
        // Component = <InfoSection />
      break

  }

  return (
    <div className = "App">
     <Nav />
     <Jumbotron /> 
     {/*   <Overview /> />*/}
     {/* <InfoSection />*/}
    {/* <Jumbotron />  <Sensors />  */} 
      {Component}
    </div>
  );
}

export default App;
